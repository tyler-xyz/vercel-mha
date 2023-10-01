import { Theme } from "@twilio-paste/core/dist/theme";
import { Box, Grid, Column } from "@twilio-paste/core";
import { useState, useEffect } from "react";
import { Client as TwilioClient } from "@twilio/conversations";
import { Message, User, Conversation, Participant   } from "@twilio/conversations";

// apply permanent twilio Vars
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioApiSecret = process.env.TWILIO_API_SECRET;
// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const identity = 'Anonymous';
//added flowSid for stored value
const flowSid = process.env.STUDIO_FLOW_SID;

//connect to twilio acct client
const client = require('twilio')(accountSid, authToken);

export async function ConversationsApp(){

    
    return(
    <Theme.Provider theme="twilio">

    </Theme.Provider>
    );
}