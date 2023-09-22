"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  return (
//    <div className="grid grid-cols-1 gap-5 md:grid-cols-1">
<div>
      <DemoModal />
      <p className= "text-gray-500 mb-2 ">
      <span >By continuing, you accept our{""}</span>
      <a
        onClick={() => setShowDemoModal(true)}
        className="underline inline flex"
      >
        {/* Terms 
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
          </svg> */}
      </a>
      </p>
    </div>
  );
}
