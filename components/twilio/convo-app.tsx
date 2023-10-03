import { Theme } from "@twilio-paste/core/dist/theme";
import axios from "axios";
import twilio from 'twilio';
import React, { useState, useEffect } from "react";
import createSession from "@/app/session";
import { Message } from '@twilio/conversations';
import { Box, Grid, Column } from "@twilio-paste/core";
import { User, Conversation, Participant   } from "@twilio/conversations";
import { Client } from "@twilio/conversations";

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
        const { accountSid, apiKey, apiSecret } = await chatGrant();
        const client = new Client({ accountSid , apiKey, apiSecret });
        return client;
        }

//get conversation from client
    async function getConversation(client) {
        const conversation = await client.getConversationByUniqueName('conversation-unique-name').fetch();
        return conversation;
    }

// get messages from conversation
    async function getMessages(conversation){
        const messages = await conversation.getMEssages();
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