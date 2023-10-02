import twilio from 'twilio';
import AccessToken from 'twilio/lib/jwt/AccessToken';
import { ChatGrant } from 'twilio/lib/jwt/AccessToken';

// apply permanent twilio Vars from .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;
// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const identity = 'Anonymous';
//added flowSid for stored value
const flowSid = process.env.STUDIO_FLOW_SID;
//connect to twilio acct client
const client = require('twilio')(accountSid, authToken);

//connect to the conversation via webhook
export default function getToken() {
    const AcessToken = require('twilio').jwt.AccessToken;
    const ChatGrant = AccessToken.ChatGrant;
    //issue chatGrant
    const chatGrant = new ChatGrant({
        serviceSid: serviceSid,
    });
    //creates new access token
    const token = new AcessToken(
        accountSid,
        twilioApiKey,
        twilioApiSecret,
        identity
    );
    token.addGrant(chatGrant);
    //return the new chat access token
    return token.toJwt();
}