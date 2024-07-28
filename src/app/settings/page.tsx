import Layout from '@/components/Layout'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row'>
      <Layout>
        <div className="p-4 px-8 my-4">
          <span className="font-sans font-bold text-2xl p-2">Settings</span>
        </div>
        <div className="px-4 py-4 md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 mx-8 h-full mb-8 "></div>
      </Layout>
    </div>
  )
}

export default page
