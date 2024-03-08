'use client'
import { Button } from "@twilio-paste/button";
import Link from "next/link";
import { Letschat } from "../shared/icons";
import { useCallback, useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

//
export default function LetsChat() {
  const { executeRecaptcha } = useReCaptcha();
  const [notification, setNotification] = useState<string>('');
  const [notificationType, setNotificationType] = useState<string>('');

  const handleSumitForm = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, "response Google reCaptcha server");
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );

  const submitEnquiryForm = async (gReCaptchaToken: any) => {
    fetch("/app/api/robot.ts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "response from backend");
        if (res?.status === "success") {
          setNotification(res?.message);
          setNotificationType(res?.status);
        } else {
          setNotification(res?.message);
          setNotificationType(res?.status);
        }
      });
  };

  return(
  <Link href='/chat' passHref
  className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-cyan bg-cyan px-5 py-2 text-sm text-white lets-chat-bold font-display transition-colors hover:bg-white hover:text-cyan"
  >
    Let&apos;s Chat&nbsp; 
 {/*   
   <Button variant="primary" size="default" onClick={handleSumitForm} >
      <Letschat />
   </Button>
*/}
  </Link>
);
}
