"use client";
import { Spinner } from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/dist/theme";

export default function Loading() {
    // twilio loading spinner set to red and size  60
    return (
        <Theme.Provider theme='twilio'>
        <Spinner size="sizeIcon60" color="colorTextDestructiveStrong" decorative={false} title="Loading" />
        </Theme.Provider>
    )
  }