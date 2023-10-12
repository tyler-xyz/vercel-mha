/* Initialization */
import {Client, State} from "@twilio/conversations";
import axios from "axios";

//get 32 char token using axios from session.ts
async function getToken() {
    try {
        const response = await axios.get('./session.ts');
        console.log('Response Data:', response.data); // see response data
        return response.data;
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    }
//
async function getClient(){
    const client: Client = new Client(await getToken());
    client.on('stateChanged', (state: State) => {
    if (state === "failed") {
        return(
            console.log('The client failed to initialize')
        );
    }
    if (state === 'initialized') {
        // Use the client
        return client;
    }
});
}
// 