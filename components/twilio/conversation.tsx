import { useState, useEffect, useContext } from "react";
import { Client as TwilioClient, Conversation } from "@twilio/conversations";
import {
    Flex, Box, Button, 
    AlertDialog, Separator, ChatMessage, 
    Toaster, useToaster,
} from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/dist/theme";
import getToken  from "../../app/session";
import axios from 'axios';

//assign perm vars
    const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID; 
    const flowSid = process.env.STUDIO_FLOW_SID;; 
    const axios = require('axios');

//
export async function Conversations(
    client: TwilioClient
) {



    return(
        <Theme.Provider theme="default">
            
        </Theme.Provider>
    );
}
