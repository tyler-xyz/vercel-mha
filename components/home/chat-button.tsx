'use client'
import { Button } from "@twilio-paste/button";
import Link from "next/link";
import { Letschat } from "../shared/icons";

export default function LetsChat() {
  return(
  <Link href='/chat' passHref
  className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-red bg-red px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-red"
  >
   <Button variant="destructive" size="rounded_small">
   <span className="space-x-1">
          Let&apos;s Chat 
          <Letschat />
        </span>
   </Button>
  </Link>
);
}
