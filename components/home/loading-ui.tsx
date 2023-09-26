"use client";
import { Spinner } from "@twilio-paste/core";

export default function Loading() {
    // twilio loading spinner set to red and size  60
    return (
        <Spinner size="sizeIcon60" color="colorTextDestructiveStrong" decorative={false} title="Loading" />
    )
  }