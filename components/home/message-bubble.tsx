import React from "react";
import {Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxStyleProps, BoxElementProps } from "@twilio-paste/box";

import {MessageVariantContext} from './message-var';
import type {MessageVariants} from './message-var';

//export chat bubble props
export interface ChatBubbleProps{
    children?: React.ReactNode;
    element?: BoxElementProps['element'];
}
//create and style inbound/outbound messages
const bubbleVariantStyles: {
    [key in MessageVariants]: BoxStyleProps;
} = {
    inbound: {
        backgroundColor: 'colorBackground',
        alignSelf: ' flex-start',
    },
    outbound: {
        backgroundColor: 'colorBackgroundInverseStronger',
        alignSelf: "flex-end",
        color: 'colorTextInverse',
    },
};
        //
    export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(({children, element = 'CHAT_BUBBLE', ...props}, ref) => {
        const variant = React.useContext(MessageVariantContext);

        //return
        return (
            <Box
            display="inline-block"
            fontSize="fontSize30"
            lineHeight="lineHeight20"
            borderRadius="borderRadius20"
            paddingY="space30"
            paddingX="space40"
            marginBottom="space30"
            element={element}
            ref={ref}
            variant={variant}
            whiteSpace="pre-wrap"
            {...bubbleVariantStyles[variant]}
            {...safelySpreadBoxProps(props)}
            >
                {children}
            </Box>
        );
    }
    );
    // display chat bubble
    ChatBubble.displayName = 'ChatBubble';