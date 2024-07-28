'use client'

import Layout from '@/components/Layout'
import React, { useState } from 'react'
import Dnd from "@/components/Dnd"

const page = () => {
  const [clear, setClear] = useState(false)
  
  return (
    <Layout>
      <div className="p-4 px-8 my-4 w-full h-full">
        <div className='flex flex-row w-full justify-between mb-4'>
          <span className="font-sans font-bold text-2xl p-2">Landing Page Generator</span>
        <button  className='h-fit w-fit p-2 bg-black text-white rounded-md' onClick={() => setClear(true)}>
          Clear Draggable
        </button>
        </div>
        <Dnd clear={clear}/>
      </div>
    </Layout>
  )
}

export default page
