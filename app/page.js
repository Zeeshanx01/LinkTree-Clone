'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [handle, sethandle] = useState('')
  const router = useRouter()

  const createTree = async () => {
    router.push(`/generate?handle=${handle}`)
  }

  return (
    <main className="overflow-hidden">



      {/* Hero Section */}
      <section className="bg-[#254f1a] grid grid-cols-2 max-lg:grid-cols-1 px-[10vw] py-24">
        <div className="text-[#d2e823] flex flex-col justify-center items-start space-y-8">
          <h1 className="text-6xl font-bold max-md:text-4xl leading-tight">
            Everything you are.<br/>In one, simple link in bio.
          </h1>
          <p className="text-xl max-md:text-lg text-[#d2e823cc]">
            Join 50M+ people using Linktree for their link in bio. One link to help you share 
            everything you create, curate and sell from your Instagram, TikTok, Twitter, 
            YouTube and other social media profiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px]">
            <input
              value={handle}
              onChange={(e) => sethandle(e.target.value)}
              className="flex-1 text-gray-700 bg-white font-semibold px-6 py-4 rounded-lg focus:outline-2 focus:outline-green-700"
              type="text"
              placeholder="yourname"
            />
            <button
              onClick={createTree}
              className='bg-[#e9c0e9] hover:bg-[#e9c0e9dd] text-black text-lg px-8 py-4 rounded-full whitespace-nowrap'>
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center max-lg:mt-12">
          <img 
            src="/img/section1.png" 
            alt="Linktree interface example"
            className="w-full max-w-[600px]"
          />
        </div>
      </section>




      {/* Features Section */}
      <section className="bg-[#e9c0e9] text-[#502274] py-24 px-[10vw]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The only link you'll ever need</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-12 ">
            {[
              {
                icon: '🌐',
                title: 'One link for all your content',
                text: 'Share your links, videos, music, podcasts, products and more'
              },
              {
                icon: '💸',
                title: 'Receive tips & donations',
                text: 'Get supported by your audience with direct payments'
              },
              {
                icon: '📊',
                title: 'Analytics & insights',
                text: 'Understand what working with our detailed analytics'
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 bg-opacity-50 backdrop-blur-sm">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Use Cases Section */}
      <section className="bg-[#780016] text-[#e9c0e9] py-24 px-[10vw]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Used by the world's most innovative people</h2>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            {['Creators', 'Small Businesses', 'Enterprises', 'Musicians'].map((useCase, index) => (
              <div key={index} className="bg-white text-[#cf8ccf] p-8 rounded-2xl hover:shadow-lg transition-shadow bg-opacity-85 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">{useCase}</h3>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-blue-600 font-semibold hover:underline">
                  Get started &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Integrations Section */}
{/* Integrations Section */}
<section className="py-24 px-[10vw] bg-[#502274] text-[#e9c0e9]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Connect your favorite platforms</h2>
    <div className="grid grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-2 gap-8">
      {['Instagram', 'TikTok', 'YouTube', 'Twitter'].map((platform, index) => (
        <div key={index} className="flex items-center justify-center p-6 bg-gray-50 text-[#cf8ccf] rounded-xl bg-opacity-80 backdrop-blur-sm">
          <div className="h-12 w-12">
            {platform === 'Instagram' && (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            )}

            {platform === 'TikTok' && (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            )}

            {platform === 'YouTube' && (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186 32.26 32.26 0 000 12a32.26 32.26 0 00.502 5.814 3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136A32.26 32.26 0 0024 12a32.26 32.26 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            )}

            {platform === 'Twitter' && (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
            )}


          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* CTA Section */}
      <section className="bg-[#254f1a] py-24 px-[10vw]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#d2e823] mb-8">
            Get started for free
          </h2>
          <p className="text-xl text-[#d2e823cc] mb-12">
            Join millions people and brands already using Linktree
          </p>
          <div className="flex justify-center gap-4">
            <input
              value={handle}
              onChange={(e) => sethandle(e.target.value)}
              className="text-gray-700 bg-white font-semibold px-6 py-4 rounded-lg focus:outline-2 focus:outline-green-700 max-w-[400px] w-full"
              type="text"
              placeholder="yourname"
            />
            <button
              onClick={createTree}
              className='bg-[#e9c0e9] hover:bg-[#e9c0e9dd] text-black text-lg px-8 py-4 rounded-full whitespace-nowrap'>
              Get started free
            </button>
          </div>
        </div>
      </section>



    </main>

  );
}