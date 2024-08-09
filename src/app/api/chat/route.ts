import { NextResponse } from 'next/server';
import { chain } from '../../../../utils/chain';
import { Message } from '../../../../types/message';

export async function POST(request: Request) {

    const body = await request.json();
    const question: string = body.query;
    const history: Message[] = body.history ?? []

console.log('body name',body.user.name);
// console.log('question',question);
// console.log('history',history);


const userId =body.user.userId
// const userId ="qweqz"
    // const res = await chain(userId);
    // const res1 = await chain.invoke({ input: `Hi! I'm ${names}` });
    // console.log({ res1 });

    const resChain = await chain(userId)

        // const res = await  resChain.call({
        //     question: question,
        //     chat_history: history.map(h => h.content).join("\n"),
        // });
        // const res = await  resChain.conversationChain.invoke({ input: `${question}` });
        const res = await  resChain.conversationChain.invoke({ word: `I am called ${body.user.name} and ${question} ` });
        const resMemory :any = resChain.viewMemoryHistory

        // const viewMemoryHistory = await resMomo.loadMemoryVariables();
if(res){    console.log('res--> resondeds')}
if(resMemory){        console.log('resChainMeory--> responded')}

// Turn the object string into an array
function parseMemoryHistory(resMemory:any) {
  const history = resMemory.history.split('\n');
  const result = [];
  
  for (let i = 0; i < history.length; i++) {
    const line = history[i].trim();
    if (line.startsWith('Human:')) {
      result.push({ Human: line.replace('Human: ', '') });
    } else if (line.startsWith('AI:')) {
      result.push({ AI: line.replace('AI: ', '') });
    }
  }
  
  return result;
}
const memoryHistory = parseMemoryHistory(resMemory);
// console.log("historyIterated...",parseMemoryHistory(resMemory));

    // const resMemoryToArray = {...resMemory}
    // console.log('res-->',res)
    // console.log('res.sourceDocuments-->',res.sourceDocuments)

    // const links: string[] = Array.from(new Set(res.sourceDocuments.map((document: {metadata: {source: string}}) => document.metadata.source)))
    // return NextResponse.json({role: "assistant", content: res.text, links: links})

    // const historyData: string[] = Array.from(new Set(res.sourceDocuments.map((document: {metadata: {source: string}}) => document.metadata.source)))

    // console.log('historyData-->',historyData)

    return NextResponse.json({role: "assistant", content: res.response, historyData:memoryHistory})
}
