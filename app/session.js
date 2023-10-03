import twilio from 'twilio';

//permanent constants
const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

export default async function createSession(){
    // Vars from .env
    const twilioAcctSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioApiKey = process.env.TWILIO_API_KEY;
    const twilioApiSecret = process.env.TWILIO_API_SECRET;

    // Vars to pass for chatSid and identity
    const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
    const identity = 'Anonymous';

    //issue chatGrant
    const chatGrant = new ChatGrant({
        serviceSid: serviceSid,
    });
    //creates new access token
    const token = new AccessToken(accountSid, twilioApiKey,
        twilioApiSecret, {identity: identity},
        );

    token.addGrant(chatGrant);
    //return the new chat access token
    return (
        token.toJwt()
    );
}
    // return the token as a string to the console
        console.log(token.toJwt());