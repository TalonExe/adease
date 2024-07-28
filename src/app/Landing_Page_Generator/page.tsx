import Layout from '@/components/Layout'
import React from 'react'
import Dnd_menu from "@/components/dnd_menu"

const page = () => {
  return (
    <div className='flex flex-row'>
      <Layout>
        <div className="p-4 px-8 my-4">
          <span className="font-sans font-bold text-2xl p-2">Landing Page Generator</span>
        </div>
        <Dnd_menu/>
        
      </Layout>
    </div>
  )
}

export default page
