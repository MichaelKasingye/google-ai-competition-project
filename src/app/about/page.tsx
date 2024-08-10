"use client";
import { useAuth } from "@/context/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { useEffect } from "react";

export default function About() {
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
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Head>
        <title>About Huhumuza AI - Your Mental Wellness Friend</title>
        <meta name="description" content="Learn about Huhumuza AI and how it supports your mental well-being." />
      </Head>

      <div className="hero-section flex flex-col items-center justify-center text-center bg-gradient-to-b p-0 rounded-lg shadow-lg w-full mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-violet-500">About</span> Huhumuza AI
        </h1>
      </div>

      <div className="w-full max-w-4xl px-4 py-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">AI Mission</h2>
        <p className="text-lg mb-4">
          Huhumuza AI is a word in of the Ugandan tribes meaning to calm down. Huhumuza AI purpose to address the growing mental health crisis affecting millions of people across the United States and the world. Mental health issues, ranging from anxiety to depression, affect over 50 million Americans each year, with anxiety disorders being the most prevalent, impacting nearly 19.1% of adults. Depression affects 8.3% of adults and continues to be a significant challenge, especially as the impact of the COVID-19 pandemic exacerbates mental health conditions across all age groups.
        </p>
        <p className="text-lg mb-4">
          Recognizing the need for accessible, empathetic, and effective mental health support, Huhumuza AI is designed to be your friendly, supportive, and empathetic companion. Whether you’re facing day-to-day stress or more serious mental health challenges, Huhumuza AI is here to help. The AI offers a safe and confidential space to talk, providing support and encouragement whenever you need it.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Huhumuza AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4  rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Empathy and Understanding</h3>
            <p className="text-md">
              Huhumuza AI isn’t just an AI; it’s a friend who understands and shares your feelings. Whether you're dealing with anxiety, depression, or situational stress, Huhumuza is there to listen and provide comfort.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Accessible Anytime, Anywhere</h3>
            <p className="text-md">
              In a world where 55% of adults with mental illness don’t receive the care they need due to cost or other barriers, Huhumuza AI breaks down these obstacles by being available anytime you need to talk, offering support without the need for an appointment or insurance.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Support for All Ages</h3>
            <p className="text-md">
              Mental health challenges can begin as early as age 14, with 50% of lifelong mental illnesses starting by this age. Huhumuza AI provides tailored support for users of all ages, from adolescents to adults, ensuring that no one faces their struggles alone.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Combatting Isolation</h3>
            <p className="text-md">
              During the COVID-19 pandemic, nearly 45.2% of adults report that the pandemic harms their mental health. Huhumuza AI provides a supportive connection, helping to alleviate feelings of isolation and loneliness.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        <button className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30" onClick={handleSignIn}>
          Get Started
        </button>
        <div className="m-2">
        (Resarch source: <a href="https://www.usatoday.com/money/blueprint/health-insurance/mental-health-statistics/" target="_blank" className="text-violet-500 hover:underline">USA Today</a>), 
        (Resarch source: <a href="https://www.usa.edu/blog/mental-health-statistics/" target="_blank" className="text-violet-500 hover:underline">University of St. Augustine for Health Sciences</a>).
        </div>
      </div>
    </main>
  );
}
