import React from "react";
import {
  useChatLogger,
  ChatLogger,
  ChatBookend,
  ChatBookendItem,
  ChatMessage,
  ChatBubble,
  ChatMessageMeta,
  ChatMessageMetaItem
} from "@twilio-paste/chat-log";
import { ChatComposer } from "@twilio-paste/chat-composer";
import { Box } from "@twilio-paste/box";
import { $getRoot } from "@twilio-paste/lexical-library";
import { EditorState } from "@twilio-paste/lexical-library";
import { SendButtonPlugin } from "./sendButtonPlugin";
import { createNewMessage } from "./helpers";
import NavWarning from "../home/nav-warning";

export const CustomerChatLog: React.FC = () => {
  const scrollRef = React.createRef<HTMLDivElement>();
  const { chats, push } = useChatLogger(
    {
      content: (
        <ChatBookend>
          <ChatBookendItem>Today</ChatBookendItem>
          <ChatBookendItem>
              <strong>Chat Started</strong>- 2:46 PM
          </ChatBookendItem>
        </ChatBookend>
      ),
    },
    //insert nav warning comp
    {
      variant: 'inbound',
      content: (
        <NavWarning />
      )
    },
    //first inbound msg
    {
      variant: 'inbound',
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>
            INSERT FIRST MSG HERE
          </ChatBubble>
            <ChatMessageMetaItem>
              2:46 PM
            </ChatMessageMetaItem>
        </ChatMessage>
      )
    },
    //first outbound msg
    {
      variant: 'outbound',
      content: (
        <ChatMessage variant="outbound">
          <ChatBubble>
            INSERT RESPONSE HERE
          </ChatBubble>
          <ChatMessageMeta aria-label="said by you at 4:27 PM">
          <ChatMessageMetaItem>
                    2:47 PM
          </ChatMessageMetaItem>
        </ChatMessageMeta>
        </ChatMessage>
      ),
    }, 
  );
  const [message, setMessage] = React.useState("");
  
  const handleComposerChange:any = (editorState: EditorState) => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

//const to handle on enterkey press
  const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === "Enter") {
    event.preventDefault();
    push(createNewMessage(message));
  }
};


  return (
    <Box minHeight="size50" display="grid" gridTemplateRows="1fr auto">
      <Box overflowY="scroll" maxHeight="size50" tabIndex={0}>
        <ChatLogger chats={chats} />
      </Box>
      <Box
        ref={scrollRef}
        borderStyle="solid"
        borderWidth="borderWidth0"
        borderTopWidth="borderWidth10"
        borderColor="colorBorderWeak"
        display="flex"
        flexDirection="row"
        columnGap="space30"
        paddingX="space70"
        paddingY="space50"
        overflowX="hidden" 
        overflowY="scroll"
      >
        <ChatComposer
          maxHeight="size10"
          config={{
            namespace: "foo",
            onError: (error: Error) => {
              throw error;
            }
          }}
          ariaLabel="Message"
          placeholder="Type your message here..."
          onChange={handleComposerChange}
          //handle enter key down
          onKeyDown={handleKeyDown}
        >
          <>
            {/* <AutoScrollPlugin scrollRef={scrollRef} /> */}
            <SendButtonPlugin
              onClick={() => {
                push(createNewMessage(message));
              }}
            />
          </>
        </ChatComposer>
      </Box>
    </Box>
  );
};
