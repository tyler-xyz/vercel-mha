//  color theme 

const brandColor1 = "#1976d2";
const brandColor2 = "#233659";
const brandTextColor = "#ffffff";


const personalizedColors = {
    darkBlueBackground: "#3C425C",
    whiteText: "#FFFFFF",
    entryPointBackground: "#3C425C",
    lighterBackground: "#ecedf1",
    primaryButtonBackground: "#1976d2",
    primaryButtonColor: "#FFFFFF",
    secondaryButtonBackground: "#6e7180",
    secondaryButtonColor: "#FFFFFF"
};

const colors = {
    defaultButtonColor: "#3C425C",
    buttonHoverColor: "#1976d2",
};

// assign 
const brandMessageBubbleColors = (bgColor) => ({
    Bubble: {
        background: bgColor,
        color: brandTextColor
    },
    Avatar: {
        background: bgColor,
        color: brandTextColor
    },
    Header: {
        color: brandTextColor
    }
});

const brandedColors = {
    Chat: {
        MessageListItem: {
            FromOthers: brandMessageBubbleColors(brandColor2),
            FromMe: brandMessageBubbleColors(brandColor1),
        },
        MessageInput: {
            Container: {
                Button: {
                    background: brandColor1,
                    color: brandTextColor
                }
            }
        },
        MessageCanvasTray: {
            Container: {
                background: personalizedColors.darkBlueBackground,
                color: personalizedColors.whiteText
            }
        },
    },

    MainHeader: {
        Container: {
            background: personalizedColors.darkBlueBackground,
            color: personalizedColors.whiteText
        },
        Logo: {
            fill: brandTextColor
        }
    },


    EntryPoint: {
        Container: {
            backgroundImage: `linear-gradient(to top, ${colors.defaultButtonColor}, ${colors.defaultButtonColor})`,
            backgroundColor: "rgba(0,0,0,0)",
            color: "#ffffff",
            "&:hover": {
                backgroundColor: colors.buttonHoverColor,
                backgroundBlendMode: "color",
            }
        }
    },

    PreEngagementCanvas: {
        Container: {
            background: personalizedColors.lighterBackground
        },

        Form: {
            SubmitButton: {
                background: personalizedColors.primaryButtonBackground,
                color: personalizedColors.whiteText
            }
        }
    }
};

// color theme 


var appConfig = {
    accountSid: "ACa3fc06fd70fef1a4fef034c857fdee2a",
    flexFlowSid: "FO6c3f7c21446e5f46c216a7c9fa9d67bb",
    componentProps: {
        MessagingCanvas: {
            memberDisplayOptions: {
                yourDefaultName: 'You',
                theirDefaultName: ' ',
                yourFriendlyNameOverride: true,
                theirFriendlyNameOverride: false
            }
        },
    },
    startEngagementOnInit: true,
    colorTheme: {
        overrides: brandedColors
    },
};


Twilio.FlexWebChat.createWebChat(appConfig).then(webchat => {
    const { manager } = webchat;
    console.log(manager);
    Twilio.FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.body = "Hi, this is Crisis Text Line. Youâ€™re not alone. By texting further with us, you agree to our Terms: goo.gl/EMCKCY. Si hablas espaÃ±ol y quieres hablar con una persona voluntaria entrenada, envÃ­a la palabra ESPAÃ‘OL vÃ­a mensaje de texto ahora. Whatâ€™s your crisis?";
    Twilio.FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
        const { question } = payload.formData;
        if (!question)
            return;

        const { channelSid } = manager.store.getState().flex.session;
        manager
            .chatClient.getChannelBySid(channelSid)
            .then(channel => channel.sendMessage(question));
    });

    manager.strings.WelcomeMessage = "Welcome to the Chat";
    manager.strings.PredefinedChatMessageAuthorName = " ";
    webchat.init();

    setTimeout(function () { $('.Twilio-EntryPoint').click(); }, 3000);



});