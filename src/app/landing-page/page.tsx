import Layout from '@/components/Layout'
import React from 'react'
import Dnd from "@/components/Dnd"

const page = () => {
  return (
    <Layout>
      <div className="p-4 px-8 my-4 w-full h-full">
        <span className="font-sans font-bold text-2xl p-2">Landing Page Generator</span>
        <Dnd/>
      </div>
    </Layout>
  )
}

export default page
