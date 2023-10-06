// components/twilio.ts
import { Client } from "@twilio/conversations";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export default function getClient(){
    const acctString = {accountSid};
    const client: Client = new Client(acctString, authToken);
}



