"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import {Button} from '@twilio-paste/button';
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";

export default function EulaButton() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  
  return(
  <div className= "text-center w-full max-w-xl">
    <DemoModal />
    <p
      className="mx-auto mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-sm inline-flex"
      style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
    >
        By continuing, you accept our&nbsp;
    </p>
    <p className= "mt-6 animate-fade-up text-gray-500 opacity-0 md:text-sm inline-flex underline"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
    <Button 
     variant="link" 
     onClick={() => setShowDemoModal(true)}
    >
    Terms&nbsp; 
    <p>
     <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" className="w-4 h-4">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
          />
      </svg>
    </p>
      {/* <LinkExternalIcon decorative={false} title="Show End-User License Agreement" size="sizeIcon10"/> */}
    </Button>
    </p>
</div>
);
}
