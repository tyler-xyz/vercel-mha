import {Button} from '@twilio-paste/button';
import { ProductChatIcon } from "@twilio-paste/icons/esm/ProductChatIcon";

const LetsChat = () => {
  return(
  <Button variant="destructive" size="rounded_small">
    Let&apos;s Chat
    <ProductChatIcon decorative />
  </Button>
);
}
export default LetsChat;
