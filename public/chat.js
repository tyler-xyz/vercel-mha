// document.addEventListener(
//     'DOMContentLoaded', function(){

        var appConfig = {
               accountSid: "ACa3fc06fd70fef1a4fef034c857fdee2a",
               flexFlowSid: "FO6c3f7c21446e5f46c216a7c9fa9d67bb",
               componentProps: {
               MessagingCanvas: {
               memberDisplayOptions: {
               yourDefaultName: 'You',
               theirDefaultName: 'Cares',
               yourFriendlyNameOverride: true,
               theirFriendlyNameOverride: false
                   }
               },
               },
               startEngagementOnInit: true,
           };
    
            Twilio.FlexWebChat.createWebChat(appConfig).then(webchat => {
            const { manager } = webchat;
            console.log(manager);
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
            manager.strings.PredefinedChatMessageAuthorName  = "Cares";
            webchat.init();
    
            }); 

//     }
// )

