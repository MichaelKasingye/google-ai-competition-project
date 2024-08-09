export type Message = {
    role: "user" | "assistant"
    content: string
    links?: string[]
}

export interface ChatMessage {
    sender: string;
    text: string;
  }