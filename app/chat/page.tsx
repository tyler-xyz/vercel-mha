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
{/* temporary nav warning */}
<div className="alert alert-info bg-indigo-500/50 mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 ">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="md:text-xsm">Please note. If you navigate away from the chat window your connection may be lost.</p>
        </div>
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
{/* text input temporary */}
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
    </>
  );
}