import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from "react";
import { Conversation } from "@twilio/conversations";
import { Box } from "@twilio-paste/box";

/* this is the index page for the Chat Page */

export default function Chat() {
  return (
    <>
{/* box container for chatWindow demo */}
    <div className="box-content my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0 border-4">
{/* temporary chatbubbles */}
    <div className="chat chat-start">
    <div className="chat-bubble">You were the Chosen One!</div>
    <div className="chat-footer opacity-50">
      Seen
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">I loved you.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>

    </div>
    </>
  );
}