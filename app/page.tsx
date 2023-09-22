import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import EulaButton from "@/components/home/terms-button";
import NavWarning from "@/components/home/nav-warning";
import { Box } from "@twilio-paste/box";
import { InfoIcon } from "lucide-react";

export default async function Home() {
  return (
    <>
    {/* adding recaptcha */}
    <ReCaptchaProvider reCaptchaKey="6Lc2qS4oAAAAACIcdUjUVeeviZGRFaLVvN_aIUL1">
    {/* begin orig code */}
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h3
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>You are not alone.</Balancer>
        </h3>
        {/* second paragraph start */}
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
          Connect with a Youth Peer Advocate.
          </Balancer>
        </p>
        {/* begin chat button */}
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-red bg-red px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-red"
            href="/chat"
            // target="_self"
            // rel="noopener noreferrer"
          >
            <p>Let&apos;s Chat</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="w-5 h-5">
  
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
              </svg>
          </Link>
        </div>
       
      <div>
        {/* terms  */}
        {/* <p
          className="mx-auto mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-sm inline-flex"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
        By continuing, you accept our{" "}
        </p> */}
        <EulaButton />
      </div>

       {/* navigation warning  */}
       <Box
            as="article"
            backgroundColor="colorBackgroundBody"
            padding="space60"
            >
                Please note
        <Box
            backgroundColor="colorBackgroundSuccessWeakest"
             display="inline-block"
             padding="space40"
            >
                <InfoIcon />
            <p
             className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-norm"
             style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
             >
                While you chat with us you must remain on the website. If you navigate away from the chat window your connection may be lost.
            </p>
        </Box>
        </Box>
        {/* <NavWarning /> */}
        {/* <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-norm"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
          Please note that while you chat with us you must remain on the website. If you navigate away from the chat window your connection may be lost.
          </Balancer>
        </p>  */}
      </div>
      </ReCaptchaProvider>
    </>
  );
}

