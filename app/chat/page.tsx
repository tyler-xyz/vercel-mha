"use client";
import Image from "next/image";
import React from "react";
import { Theme } from "@twilio-paste/core/dist/theme";
import Loading from "@/components/home/loading-ui";
import { Suspense } from "react";
import { App } from "@/components/twilio/app";
/* this is the index page for the Chat Page */

export default function Chat() {
  return (
    <>
{/* box container for chatWindow demo */}
<div className="z-10 w-full max-w-xl px-5 xl:px-2 h-screen p-2 border-2">
    <Theme.Provider theme='twilio'>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
    </Theme.Provider>
</div>
    </>
  );
}