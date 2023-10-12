require('dotenv').config();
// env vars
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const keySid = process.env.TWILIO_API_KEY;
const secret = process.env.TWILIO_API_SECRET;
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
//chat attribute vars
const client = require('twilio')(accountSid, authToken);
const identity = 'anonymous'; //front-end user to be anon

// Create a twilio access token
async function getToken() {
    const AccessToken = require('twilio').jwt.AccessToken;
    const ChatGrant = AccessToken.ChatGrant;

    const chatGrant = new ChatGrant({
        serviceSid: serviceSid,
    });
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
//
module.exports = {getToken};

//return token as string
//return {
//  jwt: token.toJwt(),
//  identity
//};