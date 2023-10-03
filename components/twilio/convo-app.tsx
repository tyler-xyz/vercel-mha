import { Theme } from "@twilio-paste/core/dist/theme";
import { Box, Grid, Column } from "@twilio-paste/core";
import { useState, useEffect } from "react";
import { Client as TwilioClient } from "@twilio/conversations";
import { Message, User, Conversation, Participant   } from "@twilio/conversations";
import axios from "axios";
import {getToken}  from "./session";


//assign perm vars
    const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID; 
    const flowSid = process.env.STUDIO_FLOW_SID;; 
    const axios = require('axios');

export async function ConversationsApp(){
    
    //get token using axios from session.tsx
async function chatGrant(token){
    const response = await axios.get('./session.tsx')  
return 
}


    //initialize conversation
    
    return(
    <Theme.Provider theme="twilio">

    </Theme.Provider>
    );
}