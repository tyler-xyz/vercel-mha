"use client";
import Image from "next/image";
import { createRoot } from "react-dom/client";
import React from "react";
import { Theme } from "@twilio-paste/core/dist/theme";
import Loading from "@/components/home/loading-ui";
import { Suspense } from "react";
import { App } from "./app";
import "./styles.css";

/* this is the index page for the Chat Page */
{/* box container for chatWindow demo */}
{/* <div className="z-10 w-full max-w-xl px-5 xl:px-2 h-screen p-2 border-2"> */}
// </div>
const container = document.getElementById("_app");
const rootElement = createRoot(container!);
rootElement.render(
    <Theme.Provider theme='twilio'>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
    </Theme.Provider>
);
