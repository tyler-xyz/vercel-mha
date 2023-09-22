"use Client";

import React from "react";
import { Box } from "@twilio-paste/box";
import { Badge } from "@twilio-paste/badge"; 
import InfoIcon from "../shared/icons/info";

export default function NavWarning() {
    return(
    <div>
        <Box 
            position="absolute" 
            top="space10" 
            right="space10"
        >
            <Badge as="span"  variant="neutral">
            <InfoIcon />
            <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-norm"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
             >
          Please note that while you chat with us you must remain on the website. If you navigate away from the chat window your connection may be lost.
          </p>
            </Badge>
        </Box>
    </div>
    )
}