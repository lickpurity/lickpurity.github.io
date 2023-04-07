import { Test } from '@/components/Test';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>regular website (LPT)</title>
      </Head>
      <div className="w-full pt-12 flex flex-col justify-center items-center">
        <div className="max-w-3xl text-center">
          <h1 className="font-bold text-3xl">Lick Purity Test</h1>
          <p className="my-4 italic">
            The Purity Test has unhistorically served as a segue from 0-week to
            true high school life at Lick-Wilmerding High School. It&apos;s a
            voluntary opportunity for students to track the maturation of their
            experiences throughout high school.
          </p>
        </div>
        <div className="max-w-3xl">
          <Test />
        </div>
      </div>
    </>
  );
}
