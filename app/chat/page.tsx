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
<div className="z-10 w-full max-w-xl px-5 xl:px-0">
{/* temporary nav warning */}
<div className="alert alert-info bg-indigo-500/50">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <p className="md:text-xsm">Please note. If you navigate away from the chat window your connection may be lost.</p>
</div>

{/* temporary chatbubbles */}
<div className="chat chat-start">
    <div className="chat-bubble">Are you, or someone you know having an emergency crisis?</div>
    <div className="chat-footer opacity-50">
      2:46pm
    </div>
    </div>
    <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info bg-base-200">No</div>
    <div className="chat-footer opacity-50">
      Seen
  </div>
  </div>
<div className="chat chat-start">
    <div className="chat-bubble">What is your 5-digit Zip code?</div>
    <div className="chat-footer opacity-50">
      2:47pm
</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info bg-base-200">14228</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
{/* end chatbubbles */}

{/* text input temporary */}
<input type="text" placeholder="Type your message here" className="input input-bordered w-full max-w-xl" />

{/* temporary send/end btns */}
<div className="mt-3 inline-flex">
  <div className="object-left">
<button className="btn btn-outline btn-primary btn-sm">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  End Chat</button>
  </div>
  <div className="object-right">
<button className="btn btn-outline btn-error btn-sm">Send
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</button>
</div>
</div>
</div>
    </>
  );
}