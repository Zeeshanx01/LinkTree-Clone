
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const generate = () => {

  const searchParams = useSearchParams()

  const [handle, sethandle] = useState(searchParams.get('handle') || '')
  const [links, setLinks] = useState([{ link: '', linktext: '' }])
  const [pic, setpic] = useState('')
  const [desc, setdesc] = useState('')




  const handleChange = (index, link, linktext) => {

    setLinks((initialLinks) => {

      return initialLinks.map((item, i) => {

        if (i === index) {
          // return { link, linktext }
          return { ...item, link: link, linktext: linktext }
        }
        else { return item }
      })

    })
  }


  const addLink = () => {
    setLinks(links.concat([{ link: '', linktext: '' }]))
  }


  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()

    if (result.success) {
      toast.success(result.message)
      setLinks([{ link: '', linktext: '' }])
      setpic('')
    }
    else {
      toast.error(result.message)
    }


  }




  return (<>

    <section className="max-md:bg-[#d6a336] h-screen max-md:h-fit  grid grid-cols-2 max-md:grid-cols-1 ">


      <div className='max-md:h-[16vh] max-md:block hidden'></div>

      <div className="  md:bg-[#ede9e1] flex flex-col justify-center items-center md:h-screen overflow-auto">

        <h1 className='text-5xl font-bold m-5 max-md:mx-10 md:mt-[8rem]'>Create your Linktree</h1>


        <div className='form borderborder-gray-300'>


          <div className="item">

            <h2 className='text-2xl font-semibold'>Step 1: Claim your Handle</h2>

            <input
              onChange={(e) => sethandle(e.target.value)}
              value={handle || ''}
              className='block my-2 px-10 py-2 w-full drop-shadow-2xl bg-slate-100 rounded-full'
              type="text"
              placeholder='Choose your handle' />
          </div>


          <h2 className='text-2xl font-semibold '>Step 2: Add Links</h2>

          {/* <div className=' max-h-[40vh] overflow-auto p-10'> */}
          {links && links.map((item, index) => {
            return <div key={index} className="item">
              <input
                onChange={e => { handleChange(index, item.link, e.target.value) }}
                value={item.linktext || ''}
                className=' block w-full py-2 px-10 mt-3 drop-shadow-2xl bg-slate-100 rounded-full'
                type="text"
                placeholder='Enter link text' />
              <div className='bg-black opacity-50 w-1 h-2 rounded-full mx-auto'></div>
              <input
                onChange={e => { handleChange(index, e.target.value, item.linktext) }}
                value={item.link || ''}
                className='block w-full px-10 py-2 mt2 drop-shadow-2xl bg-slate-100 rounded-full'
                type="text"
                placeholder='Enter link' />
            </div>
          })}
          {/* </div> */}


          <button
            onClick={() => addLink()}
            className='bg-gray-900 hover:bg-gray-800 text-white text-xs my-4 px-5 py-3 rounded-full'>+ Add link</button>

          <div className="item flex flex-col justify-center items-center">

            <h2 className='text-2xl font-semibold'>Step 3: Add Picture and Description</h2>
            <input
              onChange={(e) => setpic(e.target.value)}
              value={pic || ''}
              className='block px-10 w-full py-2 mt-3 drop-shadow-2xl bg-slate-100 rounded-full'
              type="text"
              placeholder='Enter link to your picture' />

            <input
              onChange={(e) => setdesc(e.target.value)}
              value={desc || ''}
              className='block px-10 w-full py-2 mt-3 drop-shadow-2xl bg-slate-100 rounded-full'
              type='paragraph'
              placeholder='Enter description' />

            <button
              disabled={pic == '' || handle == '' || desc == '' || links[0].linktext == '' || links.length.link == ''}
              // disabled={links.length < 1 || !handle || !pic}
              onClick={() => { submitLinks() }}
              className='disabled:opacity-40 bg-gray-900 hover:bg-gray-800 text-white text-xs my-4 w-full py-3 rounded-full'>Create your LinkTree</button>
          </div>


        </div>

      </div>

      <div className=" bg-blue-400 max-md:h-fit overflow-hidden">
        <img className=' object-cover' src="/img/generate.png" alt="" />
      </div>


      <ToastContainer />
    </section>

  </>)
}

export default generate
