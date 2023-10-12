import twilio from 'twilio';

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const keySid = process.env.TWILIO_API_KEY;
const secret = process.env.TWILIO_API_SECRET;
// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const identity = 'anonymous';

//begin newSession to gen and return token and identity
export default async function newSession(
  accountSid: string,
  keySid: string,
  secret: string,
  identity: string
) {
//unsure if client is needed here.
const client = twilio(keySid, secret, { accountSid })

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
  {identity: identity}
);

token.addGrant(chatGrant);

// Serialize the token to a JWT string
console.log(token.toJwt());

//return token as string
return {
  jwt: token.toJwt(),
  identity
};
}