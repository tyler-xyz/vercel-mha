//imports
import twilio, { webhook } from 'twilio';
import axios from 'axios';
import {
  Conversation, Message, Participant,
  Media, Paginator,State, User
} from "@twilio/conversations";

//perm const
const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const keySid = process.env.TWILIO_API_KEY as string;
const secret = process.env.TWILIO_API_SECRET as string;
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const flowSid = process.env.STUDIO_FLOW_SID;
const syncSid = process.env.TWILIO_SYNC_SERVICE_SID; 


// Define the required arguments
const descriptor = { /* Conversation descriptor properties */ } as any;
const sid = "serviceSid";
const links = { /* Conversation links properties */ } as any;
const configuration = { /* Client configuration properties */ } as any;
const services = { /* Conversation services properties */ } as any;


const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const identity = 'test';
const client = twilio(accountSid, authToken);
const conversations = new Conversation(descriptor, sid, links, configuration, services);

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
  .then((webhook: { sid: any; }) => {
    console.log(webhook.sid)
    
  })
}
//end createChat
//begin getClient
async function getTwilioClient(){
  //
  // const newClient: Client  = new twilio(keySid, secret, { accountSid : accountSid});
  const newClient = new (twilio as any)(keySid, secret,{ accountSid : accountSid});

  return newClient;
}
//end getClient

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

module.exports = {
  chatToken,
  createChat,
  getTwilioClient
};
