import { Theme } from "@twilio-paste/core/dist/theme";
import axios from "axios";
import twilio from 'twilio';
import React, { useState, useEffect } from "react";
import createSession from "@/app/session";
import { Message } from '@twilio/conversations';
import { Box, Grid, Column } from "@twilio-paste/core";
import { User, Conversation, Participant   } from "@twilio/conversations";
import { Client, State, ConnectionState } from "@twilio/conversations";

//assign perm vars
    const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID; 
    const flowSid = process.env.STUDIO_FLOW_SID;
    const syncSid = process.env.TWILIO_SYNC_SERVICE_SID; 

//get token using axios from session.tsx
    async function chatGrant() {
        try {
            const response = await axios.get('./app/session.js');
            console.log('Response Data:', response.data); // see response data
            return response.data;
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        }

//get client from chatGrant token
    async function getClient(){
        const { accountSid, authToken, apiKey, apiSecret } = await chatGrant();
        const client: Client = new Client( accountSid , authToken );
        client.on('stateChanged', (state: State) => {
            if (state === "failed") {
                // The client failed to initialize
                return("Twilio Client connection has failed to init");
            }
            if (state === 'initialized') {
                // Use the client
                return client;

             //monitor token expiry
        client.on("tokenAboutToExpire", async () => {
            const token = await chatGrant();
            client.updateToken(token);    
            });

        client.on("tokenExpired", async () => {
            const token = await chatGrant();
            client.updateToken(token);    
            });
            }
        });
        }
//function to handle conversation scoped webhook
async function connectStudioFlow (){
// const client from getClient, const participant join
    const client =  await getClient();
    const join = await Conversation.join();
    const leave = await Conversation.leave();
    const messages = await getMessages;
// create conversation scoped webhook to studio flow
client.conversations.v1
      .conversations('ISfbfcb4d13de946128ef116ec228e2ab3')
      .webhooks
      .create({
         'configuration.method': 'GET',
         'configuration.filters': ['onMessageAdded', 'onConversationAdded'],
         'configuration.url': 'https://webhooks.twilio.com/v1/Accounts/ACa3fc06fd70fef1a4fef034c857fdee2a/Flows/FW8b2be02131c5ae2c69694880c7f9b00e',
         'configuration.flowSid': flowSid,
         'configuration.replayAfter': 0,
         target: 'studio',        
       })
      .then(webhook => join);
// fetch conversation scoped webhook from studio flow
client.conversations.v1
      .conversations('ISfbfcb4d13de946128ef116ec228e2ab3')
      .webhooks.sid
      .fetch()
      .then(webhook => console.log(webhook.sid));
// read conversation scoped webhook from studio flow
client.conversations.v1
      .conversations('ISfbfcb4d13de946128ef116ec228e2ab3')
      .webhooks.sid
      .list({limit: 20})
      .then(webhooks => webhooks.forEach(w => console.log(w.sid)));
// update conversation scoped webhook from studio flow
client.conversations.v1
      .conversations('ISfbfcb4d13de946128ef116ec228e2ab3')
      .webhooks.sid
      .update({'configuration.filters':'onMessageAdded'})
      .then(webhook => messages);
// delete the webhook
client.conversations.v1
      .conversations('ISfbfcb4d13de946128ef116ec228e2ab3')
      .webhooks.sid
      .remove()
      .then(webhook => leave);
    }


// get messages from conversation
async function getMessages(conversation){
    const messages = await conversation.getMssages();
    return messages;
}
// send message to conversation
    async function sendMessage(conversation, body) {
        await conversation.sendMessage(body);
    }

//begin ConversationsApp        
const ConversationsApp = () => {
    const [client, setClient] = useState(null);
    const [conversation, setConversation] = useState(null);
    const [messages, setMessages] = useState([]);


//ConversationApp return
    return(
    <Theme.Provider theme="twilio">

    </Theme.Provider>
    );
}