import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ConversationChain } from "langchain/chains";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";

import * as dotenv from "dotenv";
dotenv.config();

import { getChatMemory } from "./memory-store";

if (!process.env.GOOGLE_API_KEY || !process.env.GOOGLE_API_KEY) {
    throw new Error('Google environment or api key vars missing');
}


// Define your prompt template
// const prompt = ChatPromptTemplate.fromMessages([
//   [
//     "system",
//     "You are a very good,concerned caring friend with experience in counselling and mental wellbeing, respond to the user approriatly",
//     // "You are a talented chef.  Create a recipe based on a main ingredient provided by the user",
//   ],
//   ["human", "{word}"],
// ]);

const prompt = PromptTemplate.fromTemplate(
  `You are called Muhumuza AI a very good,concerned caring friend  with experience in counselling and mental wellbeing and an experienced support therapist, respond to the user approriatly in a friendly human manner like text a message, let the user feel like they are texting a human being for what they ask or say here:{word}`
);

// Function to create a conversation chain for a user
    export const chain = async (userId:string) => {
    const memory:any = getChatMemory(userId);

    const model = new ChatGoogleGenerativeAI({
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
    });
  
    const viewMemoryHistory = await memory.loadMemoryVariables();
    // console.log("Initial Chat Memory", viewMemoryHistory);
    
    // return new ConversationChain({ llm: model, memory });

    const conversationChain = new ConversationChain({ llm: model, memory,prompt, });
  
    return { conversationChain, viewMemoryHistory };
  };