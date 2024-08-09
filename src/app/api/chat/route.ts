import { NextResponse } from "next/server";
import { chain } from "../../../../utils/chain";
import { Message } from "../../../../types/message";

export async function POST(request: Request) {
  const body = await request.json();
  const question: string = body.query;
  const history: Message[] = body.history ?? [];

  const userId = body.user.userId;
  const resChain = await chain(userId);

  const res = await resChain.conversationChain.invoke({
    word: `I am called ${body.user.name} and ${question} `,
  });
  const resMemory: any = resChain.viewMemoryHistory;

  // Turn the object string into an array
  function parseMemoryHistory(resMemory: any) {
    const history = resMemory.history.split("\n");
    const result = [];

    for (let i = 0; i < history.length; i++) {
      const line = history[i].trim();
      if (line.startsWith("Human:")) {
        result.push({ Human: line.replace("Human: ", "") });
      } else if (line.startsWith("AI:")) {
        result.push({ AI: line.replace("AI: ", "") });
      }
    }

    return result;
  }
  const memoryHistory = parseMemoryHistory(resMemory);

  return NextResponse.json({
    role: "assistant",
    content: res.response,
    historyData: memoryHistory,
  });
}
