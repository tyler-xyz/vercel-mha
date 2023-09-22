import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from "react";
import { Conversation } from "@twilio/conversations";
import { Box } from "@twilio-paste/box";
import Balancer from "react-wrap-balancer";

/* this is the index page for the Chat Page */

export default function Chat() {
  return (
    <>
{/* box container for chatWindow demo */}
<div className="z-10 w-full max-w-xl px-5 xl:px-0">
<Balancer>
{/* temporary chatbubbles */}
<div className="chat chat-end">
    <div className="chat-bubble bg-base-200">Emergency Auto-Prompt1</div>
    <div className="chat-footer opacity-50">
      2:46pm
</div>
</div>
    <div className="chat chat-start">
    <div className="chat-bubble">You were the Chosen One!</div>
    <div className="chat-footer opacity-50">
      Seen
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble">I loved you.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
</Balancer>
</div>
    </>
  );
}