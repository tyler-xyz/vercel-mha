import { Theme } from "@twilio-paste/core/dist/theme";
import axios from "axios";
import createSession from "@/app/session";
import { Box, Grid, Column } from "@twilio-paste/core";
import { useState, useEffect } from "react";
import { Client as TwilioClient } from "@twilio/conversations";
import { Message, User, Conversation, Participant   } from "@twilio/conversations";

//assign perm vars
    const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID; 
    const flowSid = process.env.STUDIO_FLOW_SID;; 

export async function ConversationsApp(){
    
    //connect to twilio acct client
    const client = twilio({ accountSid: twilioAcctSid },twilioApiKey, twilioApiSecret);
    
    //get token using axios from session.tsx
async function chatGrant(){
    const response = await axios.get('./app/session.tsx')  
return 
}

    //initialize conversation
    
    return(
    <Theme.Provider theme="twilio">

    </Theme.Provider>
    );
}