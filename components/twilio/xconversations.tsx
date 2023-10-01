import { useState, useEffect, useContext } from "react";
import { Client as TwilioClient, Conversation, User, UserUpdateReason,
    ConversationUpdateReason, ParticipantUpdateReason, MessageUpdateReason,
    Participant, Message, Paginator, MessageBuilder
} from "@twilio/conversations";
import {
    Flex, Box, Button, 
    AlertDialog, Separator, ChatMessage, 
    Toaster, useToaster,
} from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/dist/theme";
import NavWarning from "../home/nav-warning";
import twilio from 'twilio';


//access and grant a token
const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

// Used when generating any kind of tokens
// To set up environmental variables, see http://twil.io/secure
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;
// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const identity = 'Anonymous';

// Create a "grant" which enables a client to use Chat as a given user,
// on a given device
const chatGrant = new ChatGrant({
  serviceSid: serviceSid,
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(
  twilioAccountSid,
  twilioApiKey,
  twilioApiSecret,
  {identity: identity}
);

token.addGrant(chatGrant);

// Serialize the token to a JWT string
console.log(token.toJwt());


//join a conversation - vestlus method
//combined with adding a participant to the conversation.
//https://www.twilio.com/docs/conversations/working-with-conversations#add-a-participant
async function createConversation(
    client: TwilioClient,
    name: string,
    participant: Participant
  ): Promise<Conversation> {
    const conversation = await client.createConversation({
      friendlyName: name, // need to choose how to identify Tconvo
      uniqueName: name,  // need to choose how to identify Tconvo
    });
    await conversation.join(); // Join the conversation
    await conversation.add("identity"); // add a participant "identity"
    conversation.on("participantJoined", (participant: Participant) => {
        // fired when a participant has joined the conversation
    });
        // send first message which will be the navigation warning
    await conversation.sendMessage('<NavWarning'); // attempt to send navwarning element
        return conversation;
  }

//get a conversation - vestlus method
async function getConversations(client:TwilioClient) {
    const conversations = await client.getSubscribedConversations();
    return conversations;
}
//delete a conversation - vestlus method destroys conversation on both ends.
//perhaps not the best method of ending a conversation
async function deleteConversation(
    conversation: Conversation) : Promise<Conversation> {
        return await conversation.delete();
    }

//remove a participant..
//from twiliodeved/api-snippets/conversations/deleting
async function removeParticipant(
    participant:Participant) : Promise<Participant> {
         await participant.remove();
         return participant;
        
}

// List New Messages - combo vestlus & api-snippets
async function listMessages(conversation: Conversation)
{
        // get the messages paginator with the latest 10 messages.
        //uses pages instead on messagePaginator
    let pages: Paginator<Message> = await conversation.getMessages(10, 0, "backwards");
        // get messages
    const messages: Message[] = pages.items;
        return messages;
        
};

// Message Builder
 async function onAddMessage(conversation: Conversation){
    // Message builder. Allows the message to be built and sent via method chaining
    const messageBuilder = conversation
    .prepareMessage()
    .setBody('temporary'); // need to replace message data
    ;
    await messageBuilder.build().send();
}

// Event Handler
client.on("conversationUpdated", ({conversation, updateReasons}: {
            conversation: Conversation,
            updateReasons: ConversationUpdateReason[]
        }) => {
            // Fired when the attributes or the metadata of a conversation have been updated
        });
message.on("updated", ({message, updateReasons}: {
    message: Message,
    updateReasons: MessageUpdateReason[]
}) => {
    // Fired when data of a message has been updated.
});
participant.on("updated", ({participant, updateReasons}: {
    participant: Participant,
    updateReasons: ParticipantUpdateReason[]
}) => {
    // Fired when the fields of the participant have been updated.
});

//User Reachability Indicator from working with conversations and api-snippets
// check if reachability function is enabled
if (!client.reachabilityEnabled) {
    // reachability function is disabled for the client
    return;
}

// listen to user reachability status updates
client.on("userUpdated", ({ user, updateReasons}: {
    user: User,
    updateReasons: UserUpdateReason[]
}) => {
    if (updateReasons.includes("reachabilityOnline")) {
        // user reachability status was updated
    }

    if (updateReasons.includes("reachabilityNotifiable")) {
        // user notifications status was updated
    }
})

const participants: Participant[] = await conversation.getParticipants();

participants.forEach(async (participant) => {
    const user: User = await participant.getUser();

    if (user.isOnline) {
        // conversation participant is online
    }

    if (user.isNotifiable) {
        // user has push notifications active
    }
});

//Read Horizon and Read Status
// set last read message index of the conversation
await conversation.updateLastReadMessageIndex(message.index);


