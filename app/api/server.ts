//imports
import twilio from 'twilio';
import axios from 'axios';
import { Client, State } from '@twilio/conversations';

//perm const
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const keySid = process.env.TWILIO_API_KEY;
const secret = process.env.TWILIO_API_SECRET;
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const flowSid = process.env.STUDIO_FLOW_SID;
const syncSid = process.env.TWILIO_SYNC_SERVICE_SID; 
//
const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const identity = 'anonymous';
const client = twilio(accountSid, authToken);

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

async function 

//complete module export
module.exports = {chatToken};
