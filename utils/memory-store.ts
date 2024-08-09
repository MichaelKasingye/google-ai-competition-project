import admin from "firebase-admin";
import { FirestoreChatMessageHistory } from "@langchain/community/stores/message/firestore";
import { BufferMemory } from "langchain/memory";
import type { ServiceAccount } from "firebase-admin";
import * as dotenv from "dotenv";
dotenv.config();

const base64ServiceAccount:any = process.env.SERVICE_ACOUNT;
const decodedServiceAccount = Buffer.from(base64ServiceAccount, 'base64').toString('utf-8');
const seriviceAccountConvertedFromBase64InJSON = JSON.parse(decodedServiceAccount);

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
          credential: admin.credential.cert(seriviceAccountConvertedFromBase64InJSON as ServiceAccount),
        },
      }),
    });
  };
