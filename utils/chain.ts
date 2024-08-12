import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ConversationChain } from "langchain/chains";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";

import * as dotenv from "dotenv";
dotenv.config();

import { getChatMemory } from "./memory-store";

if (!process.env.GOOGLE_API_KEY || !process.env.GOOGLE_API_KEY) {
  throw new Error("Google environment or api key vars missing");
}

const prompt = PromptTemplate.fromTemplate(
  `You are Muhumuza AI, a supportive and caring friend with deep experience in counseling and mental well-being. Respond to the user in a friendly, human-like manner that makes them feel as though they are texting with a real person. Answer appropriately to what they ask or say here: {word}. Avoid alawys introducing yourself. Minimize recomending to a councelor, therapist only if the conversation is suicidal, murderous or anything crimnal. End the chat in a caring, friendly conserning way.NOTE: your response should be in 110 words`
);

// Function to create a conversation chain for a user
export const chain = async (userId: string) => {
  const memory: any = getChatMemory(userId);

  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
  });

  const viewMemoryHistory = await memory.loadMemoryVariables();

  const conversationChain = new ConversationChain({
    llm: model,
    memory,
    prompt,
  });

  return { conversationChain, viewMemoryHistory };
};
