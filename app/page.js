
'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [handle, sethandle] = useState('')

  const router = useRouter()

  const createTree = async () => {
    console.log(handle);
    router.push(`/generate?handle=${handle}`)
  }


  return (<>
    <main>





      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 max-md:grid-cols-1 px-[10vw]">

        <div className="bg-blue-5000 text-[#d2e823] mt-[16vh] flex flex-col justify-center items-start ">

          <p className="text-8xl font-bold max-md:text-5xl">Everything you are. In one, simple link in bio.</p>
          <p className="text-2xl py-6 max-md:text-1xl">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="sm:space-x-4 ">

            <input
              value={handle}
              onChange={(e) => sethandle(e.target.value)}
              className="focus:outline-green-700 text-gray-700 bg-slate-100 font-semibold px-10 py-4 rounded-lg"
              type="text"
              placeholder="Your Handle" />

            {/* <Link
              href='/generate'> */}
            <button
              onClick={() => createTree()}
              className='bg-[#e9c0e9] text-black text-lg my-2 px-6 py-4 rounded-full'>Claim your Linktree</button>
            {/* </Link> */}

          </div>

        </div>

        <div className="bg-red-5000 flex justify-center items-center">
          <img src="/img/section1.png" alt="" />
        </div>





      </section>

      <section className="bg-[#e9c0e9] h-[100vh]">
        .
      </section>

      <section className="bg-[#780016] h-[100vh]">
        .
      </section>

      <section className="bg-[#f3f3f1] h-[400vh]">
        .
      </section>


      <section className="bg-[#780016] h-[100vh]">
        .
      </section>


      <section className="bg-[#502274] h-[100vh]">
        .
      </section>


    </main>


  </>);
}
