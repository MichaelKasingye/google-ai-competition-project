"use client";
import { useState, useRef, useEffect } from "react";
import { Send } from "react-feather";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

import { ChatMessage, Message } from "../../../types/message";
import LoadingDots from "@/components/LoadingDots";
import ChatHistory from "@/components/ChatHistory";
import Modal from "@/components/Modal";
import { useAuth } from "@/context/auth";

const convertHistory = (oldHistory: { [key: string]: string }[] | any) => {
  return oldHistory.map((entry: any) => {
    const role = Object.keys(entry)[0] === "Human" ? "user" : "assistant";
    return { role, content: entry[role === "user" ? "Human" : "AI"] };
  });
};

export default function Home() {
  const { user, signInWithGoogle, signOut, checkGoogleSignIn } = useAuth();
  const [message, setMessage] = useState<string | any>("");
  const [preChats, setPreChats] = useState<string | any>("");
  const [history, setHistory] = useState<Message[] | any>([
    {
      role: "assistant",
      content: `Talk to me..`,
    },
  ]);

  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();


  const handleSignOut = async () => {
    await signOut();
    router.push('/');

  };

  const handleClick = () => {
    if (message == "") return;
    setHistory((oldHistory: any) => [
      ...oldHistory,
      { role: "user", content: message },
    ]);


    setMessage("");
    setLoading(true);
    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message, history: history, user }),
    })
      .then(async (res) => {
        const resonseData = await res.json();
        const convertedData = convertHistory(resonseData.historyData);

        setHistory((oldHistory: any) => [...oldHistory, resonseData]);
        setPreChats((oldHistory: any) => [...oldHistory, convertedData]);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const formatPageName = (url: string) => {
    // Split the URL by "/" and get the last segment
    const pageName = url.split("/").pop();

    // Split by "-" and then join with space
    if (pageName) {
      const formattedName = pageName.split("-").join(" ");

      // Capitalize only the first letter of the entire string
      return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    }
  };
  
  
  useEffect(() => {
     checkGoogleSignIn()
    const checkUserStatus = async () => {
      if (!user) {
        try {
          const userLogged = await checkGoogleSignIn();
        } catch (error) {
          console.error("Error checking Google sign-in:", error);

        }
      }
    };
  
    checkUserStatus();
  
    // return () => {   };
  }, []);

  //scroll to bottom of chat
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-zinc-800/30">
      <div className="flex flex-col gap-8 w-full items-center flex-grow max-h-full">
        <div className="flex items-center justify-between md:px-[200px] w-full mt-3">
          <h1 className=" text-3xl text-white font-extralight bg-clip-text mx-3">
            Muhumuza AI
          </h1>
        

          <div className="flex items-center justify-center">
                <button className=" flex w-[90px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30" onClick={handleSignOut}>
        SignOut
        </button>
            </div>

        </div>
        <form
          className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30  flex-grow flex flex-col "
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
        

          <div className="flex flex-col gap-5 py-10 h-full">
            <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl p-6 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              <img
                src="images/ai_bot4.jpeg"
                className="h-12 w-12 rounded-full"
              />
              <p className="text-sm font-medium text-violet-500 mb-2">
                Muhumuza
              </p>
              Hello! {user?.name}.
            </div>
            {/* Chat */}
            {history.map((message: Message, idx: any) => {
              const isLastMessage = idx === history.length - 1;
              switch (message.role) {
                case "assistant":
                  return (
                    <div
                      ref={isLastMessage ? lastMessageRef : null}
                      key={idx}
                      className="flex gap-2"
                    >
                      <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl p-6 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        <img
                          src="images/ai_bot4.jpeg"
                          className="h-12 w-12 rounded-full"
                        />
                        <p className="text-sm font-medium text-violet-500 mb-2">
                          Muhumuza
                        </p>
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                        
                      </div>
                    </div>
                  );
                case "user":
                  return (
                    <div
                      className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl p-6 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                      key={idx}
                      ref={isLastMessage ? lastMessageRef : null}
                    >
                      <p className="text-sm font-medium text-violet-500 mb-2">
                        {user?.name}
                      </p>
                      {message.content}
                    </div>
                  );
              }
            })}

            {loading && (
              <div ref={lastMessageRef} className="flex gap-2">
                <div className="w-auto max-w-xl break-words bg-white rounded-b-xl rounded-tr-xl p-6 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  <img
                    src="images/ai_bot4.jpeg"
                    className="h-12 w-12 rounded-full"
                  />
                  <p className="text-sm font-medium text-violet-500 mb-4">
                    Muhumuza
                  </p>
                  <LoadingDots />
                </div>
              </div>
            )}
          </div>

          {/* input area */}
          <div className="flex sticky bottom-0 w-full ">
            {user?
           ( <div className="flex items-center justify-center w-full relative">
              <textarea
                aria-label="chat input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="border w-full resize-none rounded-full  placeholder:text-slate-400 pl-6 pr-24 text-base focus:outline-none focus:ring-4 focus:ring-violet-500/10  border-gray-300 bg-gray-200 pt-1 dark:border-neutral-800 dark:bg-zinc-800 lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleClick();
                  }
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                }}
                className=" flex w-10 h-10 items-center justify-center rounded-full px-3 text-sm  bg-violet-600 font-semibold text-white hover:bg-violet-700 active:bg-violet-800 absolute right-2 bottom-2 disabled:bg-zinc-800"
                type="submit"
                aria-label="Send"
                disabled={!message || loading}
              >
                <Send />
              </button>
            </div>)
            :
          (  <div className="flex items-center justify-center min-w-[320px] relative">
                <button className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30" >
        <Link href="/">Hey Friend! Sign up</Link>
        </button>
            </div>)
            }
          </div>
        </form>
      </div>
    </main>
  );
}
