import React from "react";
import { DateTime } from "luxon";
import { isDate } from "util/types";
import { Button,Box, ChatMessage, ChatBubble, ChatMessageMeta, ChatMessageMetaItem} from "@twilio-paste/core"
import { ChatIcon } from "@twilio-paste/icons/cjs/ChatIcon";
import InputAndAdd from "./input-add";
import { Conversation, Message, Paginator } from "@twilio/conversations";
import { UserSessionContext } from "./session";

//conversations connection
type Props= {
    conversation: Conversation;
};
//state of chat
type State = {
    messages: MessageData[];
    files: FileList | null;
};
//type of media data
type MediaData = {
    type: string;
    url: string;
    isImage: boolean;
};
//Message Data class
export class MessageData {
    id: number | string;
    senderName: string;
    message: string;
    created: Date;
    media: MediaData[];

    constructor({
        id,
        message,
        senderName,
        created,
        media,
    }: {
        id: number | string;
        message: string;
        senderName: string;
        created: Date;
        media: MediaData[];
    }) {
        this.id = id;
        this.message = message;
        this.senderName = senderName;
        this.created = created;
        this.media = media;
    }
}
//Chat Message Wrapper
export function ChatMessageWrapper({
    message,
}: {
    message: MessageData;
}): React.ReactElement {
    const sentTime = DateTime.fromJSDate(message.created).toLocaleString(
        DateTime.TIME_SIMPLE
    );
    //begin return
    return (
        <ChatMessage variant={message.id === 1 ? "inbound" : "outbound"}>
          <ChatBubble>
            {message.message}
            {message.media.map((media, i) => {
              if (media.isImage) {
                return <img key={i} width="50%" src={media.url} />;
              } else {
                // optional add icon TO-DO
                return (
                  <a key={i} href={media.url} target="_blank" rel="noreferrer">
                    Attachment
                  </a>
                );
              }
            })}
          </ChatBubble>
          <ChatMessageMeta
            aria-label={`said by ${message.senderName} at ${sentTime}`}
          >
            <ChatMessageMetaItem>{message.senderName}</ChatMessageMetaItem>
            <ChatMessageMetaItem>{sentTime}</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      );
    }
    //end ChatMessage wrapper
    //begin
    export default class MessagesView extends React.Component<Props, State> {
      static contextType = UserSessionContext;
      declare context: React.ContextType<typeof UserSessionContext>;
    
      private messageListDiv = React.createRef<HTMLDivElement>();
    
      constructor(props: Props) {
        super(props);
    
        this.state = {
          messages: [],
          files: null,
        };
      }
    //date format and display
      formatDate(date: Date): string {
        return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_SHORT);
      }
    
      onAddMessage = (message: string) => {
        void (async (message: string) => {
          const messageBuilder = this.props.conversation
            .prepareMessage()
            .setBody(message);
    
          if (this.state.files) {
            for (let i = 0; i < this.state.files.length; i++) {
              const file = this.state.files[i];
              const formData = new FormData();
              formData.append("media", file, file.name);
    
              messageBuilder.addMedia(formData);
            }
          }
    
          await messageBuilder.build().send();
        })(message);
      };
    //add media, may delete if feature shown
      onAddMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          files: e.target.files,
        });
      };
    //load messages function
      async loadMessages() {
        const messages: Message[] = [];
    
        let pager: Paginator<Message> | null =
          await this.props.conversation.getMessages();
    
        while (pager?.items) {
          // eslint-disable-next-line prefer-spread
          messages.unshift.apply(messages, pager.items);
    
          pager = pager.hasPrevPage ? await pager.prevPage() : null;
        }
    
        const chatMessages = [];
    
        for (let i = 0; i < messages.length; i++) {
          chatMessages.push(await this.makeChatMessage(messages[i]));
        }
    
        this.setState({
          messages: chatMessages,
        });
      }
    //begin makeChatMessage chat message assemble
      async makeChatMessage(message: Message) {
        const body = message.body || "";
        const created = message.dateCreated || new Date();
        const media: MediaData[] = [];
    
        if (message.type === "media" && message.attachedMedia) {
          for (let i = 0; i < message.attachedMedia.length; i++) {
            const attachedMedia = message.attachedMedia[i];
            const url = (await attachedMedia.getContentTemporaryUrl()) || "";
    
            media.push({
              type: attachedMedia.contentType,
              url,
              isImage: attachedMedia.contentType.indexOf("image/") > -1,
            });
          }
        }
    //message data return
        return new MessageData({
          id: this.context?.session?.user?.username === message.author ? 0 : 1,
          message: body,
          senderName: message.author || "",
          created,
          media,
        });
      }
      //end makeChatMessage
      //begin addMessage event listener
      addMessageListener(conversation: Conversation) {
        conversation.on("messageAdded", (message) => {
          this.makeChatMessage(message)
            .then((chatMessage) => {
              this.setState((state, props) => {
                const result = {
                  messages: [...state.messages, chatMessage],
                };
                return result;
              });
            })
            .catch((err) => console.error(err));
        });
      }
    //end addMessage event listener
      async componentDidMount(): Promise<void> {
        this.addMessageListener(this.props.conversation);
    
        await this.loadMessages();
    
        this.scrollMessageList();
      }
    // scroll message
      scrollMessageList() {
        if (!this.messageListDiv || !this.messageListDiv.current) {
          return;
        }
    
        this.messageListDiv.current.scrollTop =
          this.messageListDiv.current.scrollHeight + 100;
      }
    //mounting conversation
      async componentDidUpdate(prevProps: Props): Promise<void> {
        this.scrollMessageList();
    
        if (prevProps.conversation.sid === this.props.conversation.sid) {
          return;
        }
    
        this.addMessageListener(this.props.conversation);
    
        // The conversation has changed and so we need to reload our messages
        await this.loadMessages();
    
        this.scrollMessageList();
      }
    //begin react render
      render() {
        const css = {
          width: "100%",
          height: "calc(100vh - 375px)",
          maxHeight: "calc(100vh - 375px)",
          overflow: "auto",
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
        };
        //message canvas return
        return (
          <>
            <Box
              marginTop="space40"
              marginBottom="space40"
              borderRadius="borderRadius20"
              boxShadow="shadowBorder"
            >
              <div ref={this.messageListDiv} style={css}>
                {this.state.messages.map((message, i) => (
                  <ChatMessageWrapper key={i} message={message} />
                ))}
              </div>
            </Box>
            <Box height="60px">
              <InputAndAdd
                label="Send a Message"
                onAdd={this.onAddMessage}
                button={<ChatIcon decorative={false} title="Send a Message" />}
              />
              {/* media attachment */}
              {/* <input type="file" onChange={this.onAddMedia} multiple /> */}
            </Box>
          </>
        );
      }
}