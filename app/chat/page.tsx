"use client";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from "react";
import { Conversation } from "@twilio/conversations";
import { ChatComposer } from "@twilio-paste/core";
import { Box } from "framer-motion";
import { Theme } from "@twilio-paste/core/dist/theme";
import ChatDialog from "@/components/twilio/chat-dialog";
import Loading from "@/components/home/loading-ui";
import { Suspense } from "react";

/* this is the index page for the Chat Page */

export default function Chat() {
  console.log('Chat test')
  return (
    <>
{/* box container for chatWindow demo */}

<div className="z-10 w-full max-w-xl px-5 xl:px-2 h-screen p-2 border-2">
    <Theme.Provider theme='twilio'>
    <Suspense fallback={<Loading />}>
      {/* <ChatTest /> */}
      <ChatDialog />
    </Suspense>
    </Theme.Provider>
</div>
    </>
  );
}