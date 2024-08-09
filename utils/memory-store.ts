import admin from "firebase-admin";
import { FirestoreChatMessageHistory } from "@langchain/community/stores/message/firestore";
import { BufferMemory } from "langchain/memory";
// import serviceAccount from "../serviceAccountKey.json" assert { type: "json" }; // Update the path to your serviceAccountKey.json
// import serviceAccount from "../serviceAccountKey.json" assert { type: "json" }; // Update the path to your serviceAccountKey.json
import type { ServiceAccount } from "firebase-admin";
import * as dotenv from "dotenv";
dotenv.config();

const base64ServiceAccount:any = process.env.SERVICE_ACOUNT;
// Convert base64 to JSON
const decodedServiceAccount = Buffer.from(base64ServiceAccount, 'base64').toString('utf-8');
const seriviceAccountConvertedFromBase64InJSON = JSON.parse(decodedServiceAccount);

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount as ServiceAccount),
//     // databaseURL: "https://your-database-name.firebaseio.com" // Update with your Firebase database URL
//   });
  
  // Function to get chat memory for a user
  export const getChatMemory = (userId:string) => {
    return new BufferMemory({
      chatHistory: new FirestoreChatMessageHistory({
        collections: ["langchain"],
        docs: [`ai-memorys_${userId}`],
        sessionId: `ai-memory-ids${userId}`,
        userId: userId,
        config: {
          projectId:process.env.NEXT_PUBLIC_AI_PROJECT_ID,
          // credential: admin.credential.cert(serviceAccount as ServiceAccount),
          credential: admin.credential.cert(seriviceAccountConvertedFromBase64InJSON as ServiceAccount),
        },
      }),
    });
  };

  
// async function initPinecone() {
//     try {
//         const pinecone = new PineconeClient();

//         await pinecone.init({
//             environment: process.env.PINECONE_ENVIRONMENT ?? '',
//             apiKey: process.env.PINECONE_API_KEY ?? '',
//         });


//         return pinecone;
//     } catch (error) {
//         console.log('error', error);
//         throw new Error('Failed to initialize Pinecone Client');
//     }
// }

// export const pinecone = await initPinecone();

