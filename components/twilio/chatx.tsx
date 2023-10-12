// components/Chat.tsx
import { useState, useEffect } from 'react';
import { Conversation, Message } from '@twilio/conversations';
import { Client } from '@twilio/conversations';

const client = new Client('token'); // Your Twilio token here!

interface ChatProps {
 conversationSid: string;
}

const Chat: React.FC<ChatProps> = ({ conversationSid }) => {
 const [conversation, setConversation] = useState<Conversation | null>(null);
 const [messages, setMessages] = useState<Message[]>([]);

 useEffect(() => {
    const fetchConversation = async () => {
      const conversation = await client.getConversationBySid(conversationSid);
      setConversation(conversation);
    };

    fetchConversation();
 }, [conversationSid]);

 useEffect(() => {
    if (!conversation) return;

    const handleMessageAdded = (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
