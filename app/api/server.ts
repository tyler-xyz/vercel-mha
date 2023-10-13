//imports
import twilio, { Twilio, webhook } from 'twilio';
import axios from 'axios';
import {
  Conversation, Message, Participant,
  Media, Paginator, Client, State, User
} from "@twilio/conversations";

//env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const keySid = process.env.TWILIO_API_KEY;
const secret = process.env.TWILIO_API_SECRET;
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const flowSid = process.env.STUDIO_FLOW_SID;
const syncSid = process.env.TWILIO_SYNC_SERVICE_SID; 
//assigned
const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const identity = 'anonymous';
const client = twilio(accountSid, authToken);
const conversations = Conversation ;

//begin createChat
async function createChat() {
  //
  const client = await getTwilioClient();
  // create conversation scoped webhook to studio flow
  client.conversations.v1.conversations(serviceSid)
  .webhooks.create({
    'configuration.method': 'GET',
    'configuration.filters': ['onMessageAdded', 'onConversationAdded'],
    'configuration.url': 'https://webhooks.twilio.com/v1/Accounts/ACa3fc06fd70fef1a4fef034c857fdee2a/Flows/FW8b2be02131c5ae2c69694880c7f9b00e',
    'configuration.flowSid': flowSid,
    'configuration.replayAfter': 0,
    target: 'studio', 
  })
  .then(webhook => {
    console.log(webhook.sid),
  })
}
//end createChat

//begin chatToken grant
async function chatToken() {
  // Create a "grant" which enables a client to use Chat as a given user,
  const chatGrant = new ChatGrant({
   serviceSid: serviceSid,
  });
// list the service sid being used.
  console.log("Using conversations service " + serviceSid);
//create token based on chatGrant listed above.
  const token = new AccessToken(
    accountSid,
    keySid,
    secret,
    { identity: identity }
  );
  token.addGrant(chatGrant); 
  // Serialize the token to a JWT string
  console.log(token.toJwt());
  return token.toJwt();
}
//end chatToken grant

//begin getClient
async function getTwilioClient(){
  //
  const token = await chatToken();
  const newClient: Client = new Client(token);
  return newClient;
}
//end getClient

//begin addParticipant
async function addParticipant() {

  client.conversations.v1.conversations(serviceSid)
  .participants
  .create({identity: identity})
  .then(participant => 
      console.log("added participant by sid:" + participant.sid
    ));
}
//end addParticipant

//begin getMessages
async function getMessages() {

  const client = await createChat();
  client.conversations.Conversation(serviceSid)
  .messages
  .list()
  .then(
    messages.setBody(messages);
  )
}
//end getMessages
//complete module export
module.exports =
      {chatToken},
      {createChat},
      {getTwilioClient},
      {getMessages},
      {addParticipant};