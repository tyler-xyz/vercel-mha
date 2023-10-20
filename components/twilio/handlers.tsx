/* event handler examples */

import {
    Client,
    Conversation,
    ConversationUpdateReason,
    Message,
    MessageUpdateReason,
    Participant,
    ParticipantUpdateReason
} from "@twilio/conversations";

const client = new Client('your-twilio-token-here');
client.on("conversationUpdated", ({conversation, updateReasons}: {
    conversation: Conversation,
    updateReasons: ConversationUpdateReason[]
}) => {
    // Fired when the attributes or the metadata of a conversation have been updated
});
client.on("messageUpdated", ({ message, updateReasons }: {
    message: Message,  // Use the correct capitalization for 'Message'
    updateReasons: MessageUpdateReason[]
  }) => {
   // Fired when data of a message has been updated.
  });
client.on("participantUpdated", ({ participant, updateReasons }: {
    participant: Participant,
    updateReasons: ParticipantUpdateReason[]
  }) => {
     // Fired when the fields of the participant have been updated.
  });