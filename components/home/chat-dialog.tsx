"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChatAttachment, ChatAttachmentDescription, ChatAttachmentLink, ChatBookend, ChatBookendItem, ChatBubble, ChatEvent, ChatLogger, ChatMessage, ChatMessageMeta, ChatMessageMetaItem, useChatLogger } from "@twilio-paste/chat-log";
import { Avatar, ChatComposer } from "@twilio-paste/core";
import Conversations from "twilio/lib/rest/Conversations";
import { Box } from "lucide-react";
import { render } from "react-dom";
import { ClearEditorPlugin } from '@twilio-paste/lexical-library';
import { ElementNode, $getRoot } from 'lexical';
import { EditorState } from 'lexical';
import { SendButtonPlugin } from './send-button';

const ChatDialog = (): JSX.Element => {
    const {chats, push} = useChatLogger(
      {
        content: (
          <ChatBookend>
            <ChatBookendItem>Today</ChatBookendItem>
            <ChatBookendItem>
              <strong>Chat Started</strong>・2:46 PM
            </ChatBookendItem>
          </ChatBookend>
        ),
      },
      {
        content: (
          <ChatMessage variant="outbound">
            <ChatBubble>Quisque ullamcorper ipsum vitae lorem euismod sodales.</ChatBubble>
            <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
              <ChatMessageMetaItem>Gibby Radki ・ 5:04 PM</ChatMessageMetaItem>
            </ChatMessageMeta>
          </ChatMessage>
        ),
      },
      {
        content: (
          <ChatEvent>
            <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
          </ChatEvent>
        ),
      },
      {
        variant: 'inbound',
        content: (
          <ChatMessage variant="inbound">
            <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
          </ChatMessage>
        ),
      }
    );
    const [message, setMessage] = React.useState('');
  
    const [mounted, setMounted] = React.useState(false);
    const loggerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);
  
    React.useEffect(() => {
      setMounted(true);
    }, []);
  
    React.useEffect(() => {
      if (!mounted || !loggerRef.current) return;
      scrollerRef.current?.scrollTo({top: loggerRef.current.scrollHeight, behavior: 'smooth'});
    }, [chats, mounted]);
  
    const handleComposerChange = (editorState: EditorState) => {
      editorState.read(() => {
        const text = $getRoot().getTextContent();
        setMessage(text);
      });
    };
    const createNewMessage = (message: string): ChatMessage => {
      return {
        content: message,
        variant: 'outbound',
      };
    };
    const submitMessage = () => {
      if (message === '') return;
      push(createNewMessage(message));
    };
  
    return (
      <Box>
        <Box ref={scrollerRef} overflowX="hidden" overflowY="scroll" maxHeight="size50" tabIndex={0}>
          <ChatLogger ref={loggerRef} chats={chats} />
        </Box>
        <Box
          borderStyle="solid"
          borderWidth="borderWidth0"
          borderTopWidth="borderWidth10"
          borderColor="colorBorderWeak"
          display="flex"
          flexDirection="row"
          columnGap="space30"
          paddingX="space70"
          paddingTop="space50"
        >
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: 'foo',
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
            onChange={handleComposerChange}
          >
            <ClearEditorPlugin />
            <SendButtonPlugin onClick={submitMessage} />
            <EnterKeySubmitPlugin onKeyDown={submitMessage} />
          </ChatComposer>
        </Box>
      </Box>
    );
  };
  