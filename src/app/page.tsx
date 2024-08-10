"use client";
import { useAuth } from "@/context/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from 'next/link'

import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const { user, signInWithGoogle, signOut } = useAuth();
  const auth = getAuth();
  const router:any = useRouter();

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      router.push('/chat');
    }
  }, [user, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Huhumuza AI - Your Mental Wellness Friend</title>
        <meta name="description" content="Huhumuza AI - Your friendly mental well-being AI friend." />
      </Head>

      <div className="hero-section flex flex-col items-center justify-center text-center bg-gradient-to-b p-0 rounded-lg shadow-lg w-full">
        <h1 className="text-4xl font-bold mb-4"> <span className="text-violet-500">Hello, </span>Welcome to Huhumuza AI</h1>
        <p className="text-xl mb-8">Your friendly mental well-being AI Friend</p>
        <button className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30" onClick={handleSignIn}>
          Get started
        </button>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-8">
        
     
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Friendly{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Huhumuza AI is designed to be a friendly companion for your mental well-being.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Supportive{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Provides support and encouragement to help you manage your mental health.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Accessible{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Easily accessible anytime you need to talk or seek advice.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30">
  <h2 className="mb-3 text-2xl font-semibold">
    Empathetic{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    </span>
  </h2>
  <p className="m-0 max-w-[30ch] text-sm opacity-50">
    Huhumuza AI understands and shares your feelings, offering genuine empathy.
  </p>
</div>
      </div>
      <div className="m-2">
      <Link href="/about">
        About <span className="text-violet-500">Muhumuza</span> AI</Link>
        
        </div>
    </main>
  );
}
