import { Box } from "@twilio-paste/box";
import React from "react";

import { ChatDialog } from "@/components/twilio/chat-dialog";
import { CustomerChatLog } from "@/components/twilio/chat-log";

export const App: React.FC = () => {
  return (
    <Box>
      <ChatDialog>
        <CustomerChatLog />
      </ChatDialog>
    </Box>
  );
};