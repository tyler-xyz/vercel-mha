import { Button } from "@twilio-paste/button";
import Link from "next/link";
import { Letschat } from "../shared/icons";

export default function LetsChat() {
  return(
  <Link href='/chat' passHref>
   <Button variant="destructive" size="rounded_small">
    Let&apos;s Chat
    <Letschat />
   </Button>
  </Link>
);
}
