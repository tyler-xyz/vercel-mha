import { Box } from "@twilio-paste/box";
import { Heading, Separator } from "@twilio-paste/core";
import React from "react";
import { CustomerChatLog } from "@/components/twilio/chat-log";

export const App: React.FC = () => {
  return (
    <Box>
     <Heading as="h4" variant="heading40">
        Live Chat
      </Heading>
      <Separator orientation="horizontal" horizontalSpacing="space50" />
        <CustomerChatLog />
    </Box>
  );
};