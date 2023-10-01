import twilio from 'twilio';
import { Client as TwilioClient, Conversation, User,
} from "@twilio/conversations";

// apply permanent twilio Vars
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;
// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const identity = 'Anonymous';
//added flowSid for stored value
const flowSid = process.env.STUDIO_FLOW_SID;

//connect to the conversation via webhook
export default async function Session(
    accountSid,
    authToken,
    twilioApiKey,
    twilioApiSecret,
    serviceSid,
    identity,
    flowSid
) {
//connect to twilio acct client
const client = require('twilio')(accountSid, authToken);

}