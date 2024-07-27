import Dashboard from '@/components/Dashboard'
import Layout from '@/components/Layout'
import React from 'react'
import {
    IconCopy,
} from "@tabler/icons-react";

const page = () => {
  return (
    <div className='flex flex-row'>
      <Layout>
        <div className="flex items-center my-4 p-4">
          <span className="font-sans font-bold text-2xl">Generated Keywords</span>
          <IconCopy className="h-6 w-6 ml-2" />
        </div>
      </Layout>
    </div>
  )
}

export default page
