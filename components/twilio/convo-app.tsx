import { Theme } from "@twilio-paste/core/dist/theme";
import { Box, Grid, Column } from "@twilio-paste/core";
import { useState, useEffect } from "react";
import { Client as TwilioClient } from "@twilio/conversations";

//full front-end app


export default function ConversationsApp(){
    return(
    <Theme.Provider theme="twilio">

    </Theme.Provider>
    );
}