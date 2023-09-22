import { Button } from "@twilio-paste/button";
import { Box } from "@twilio-paste/box";
import { CLEAR_EDITOR_COMMAND, useLexicalComposerContext } from "@twilio-paste/lexical-library";
import { useEffect } from "react";

export const EnterKeySubmitPlugin = ({onClick}: {onClick: () => void}): JSX.Element => {
    // get the editor from the composer context
    const [editor] = useLexicalComposerContext();
  
    // an event handler called from custom UI can the interact with the editor to perform certain actions
    const handleSend = (): void => {
      onClick();
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
    };
  //test useEffect for Enter Key message submit
    useEffect(() => {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          handleSend();
        }
      });
  
      return () => {
        document.removeEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            handleSend();
          }
        });
      };
    }, []);
    
    return (
      <Box position="absolute" top="space30" right="space30">
        <Button 
          variant="primary_icon"
          size="reset" 
          onClick={handleSend}
        >
        </Button>
      </Box>
    );
  };
  