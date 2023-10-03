// Modified from 'https://www.twilio.com/docs/conversations/api/conversation-scoped-webhook-resource'
// combined configuration listed in QRG and Slack
//permanent studio webhook address listed below.
export default function StudioHook() {

//added flowSid for stored value
const flowSid = process.env.STUDIO_FLOW_SID;
//connect to twilio acct
const client = require('twilio')(accountSid, authToken);

//connect to the conversation via webhook
client.conversations.v1.conversations('ISfbfcb4d13de946128ef116ec228e2ab3')
      .webhooks
      .create({
         'configuration.method': 'GET',
         'configuration.filters': ['onMessageAdded', 'onConversationAdded'],
         'configuration.url': 'https://webhooks.twilio.com/v1/Accounts/ACa3fc06fd70fef1a4fef034c857fdee2a/Flows/FW8b2be02131c5ae2c69694880c7f9b00e',
         'configuration.flowSid': flowSid,
         'configuration.replayAfter': 0,
         target: 'studio',        
       })
       //{ sid:true }came from VS autocorrect, wanted to assign value???
      .then((webhook: { sid: true ; }) => console.log(webhook.sid));
    }