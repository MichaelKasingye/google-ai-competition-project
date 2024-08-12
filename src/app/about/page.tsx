"use client";
import { useAuth } from "@/context/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function About() {
  const { user, signInWithGoogle, signOut } = useAuth();
  const auth = getAuth();
  const router:any = useRouter();
  const [loading, setloading] = useState<boolean>(false);

  const handleSignIn = async () => {
    setloading(true)

    const signIn = await signInWithGoogle();
    setloading(false)  };

  useEffect(() => {
    if (user) {
      router.push('/chat');
    }
  }, [user, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Head>
        <title>About Muhumuza AI - Your Mental Wellness Friend</title>
        <meta name="description" content="Learn about Muhumuza AI and how it supports your mental well-being." />
      </Head>

      <div className="hero-section flex flex-col items-center justify-center text-center bg-gradient-to-b p-0 rounded-lg shadow-lg w-full mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-violet-500">About</span> Muhumuza AI
        </h1>
      </div>

      <div className="w-full max-w-4xl px-4 py-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">AI Mission</h2>
        <p className="text-lg mb-4">
        Muhumuza is a word from one of the Ugandan tribes, meaning "to calm down." Muhumuza AI is dedicated to addressing the escalating mental health crisis affecting millions globally, including in the United States. In 2019, 970 million people worldwide were living with a mental disorder, with anxiety and depression being the most common. In the U.S., over 50 million people face mental health challenges each year, with anxiety disorders affecting nearly 19.1% of adults and depression impacting 8.3%.

        The COVID-19 pandemic further intensified this crisis, with an 18% increase in depressive disorders and a 15% rise in anxiety disorders globally in 2020 compared to 2019. By 2021, 13.9% of the world’s population experienced mental disorders, with 71% of the global anxiety disorder burden potentially avoidable if optimal treatment was accessible to all. Mental health conditions can disrupt all areas of life, including relationships, education, and work, and they accounted for 17.2% of the total years lived with disability worldwide in 2021.
        </p>
        <p className="text-lg mb-4">
          Recognizing the need for accessible, empathetic, and effective mental health support, Muhumuza AI is designed to be your friendly, supportive, and empathetic companion. Whether you’re facing day-to-day stress or more serious mental health challenges, Muhumuza AI is here to help. The AI offers a safe and confidential space to talk, providing support and encouragement whenever you need it.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Muhumuza AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4  rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Empathy and Understanding</h3>
            <p className="text-md">
              Muhumuza AI isn’t just an AI; it’s a friend who is designed to understandsand your feelings. Whether you're dealing with anxiety, depression, or situational stress, Muhumuza is there to listen and provide comfort.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Accessible Anytime, Anywhere</h3>
            <p className="text-md">
              In a world where more than 50% of adults with mental illness don’t receive the care they need due to cost or other barriers, Muhumuza AI breaks down these obstacles by being available anytime you need to talk.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Support for All Ages</h3>
            <p className="text-md">
              Mental health challenges can begin as early as age 14, with more than 45% of lifelong mental illnesses starting by this age. Muhumuza AI provides support for users of all ages, from adolescents to adults, ensuring that no one faces their struggles alone.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Combatting Isolation</h3>
            <p className="text-md">
              During the COVID-19 pandemic, more than 40% of adults report that the pandemic harms their mental health. Muhumuza AI provides a supportive connection, helping to alleviate feelings of isolation and loneliness.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        <button className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-violet-500 hover:bg-gray-100 hover:dark:border-violet-500 hover:dark:bg-neutral-800/30" onClick={handleSignIn}>
        {loading?"loading...": "Get started"}  
        </button>
        <div className="m-2">
        (Resarch source: <a href="https://www.who.int/health-topics/mental-health#tab=tab_2" target="_blank" className="text-violet-500 hover:underline">WHO</a>),
        (Resarch source: <a href="https://www.healthdata.org/research-analysis/health-risks-issues/mental-health" target="_blank" className="text-violet-500 hover:underline">Healthdata</a>),
        (Resarch source: <a href="https://www.usatoday.com/money/blueprint/health-insurance/mental-health-statistics/" target="_blank" className="text-violet-500 hover:underline">USA Today</a>), 
        (Resarch source: <a href="https://www.usa.edu/blog/mental-health-statistics/" target="_blank" className="text-violet-500 hover:underline">University of St. Augustine for Health Sciences</a>),
        </div>
      </div>
    </main>
  );
}

