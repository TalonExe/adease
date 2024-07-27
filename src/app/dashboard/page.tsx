import Dashboard from '@/components/Dashboard'
import Layout from '@/components/Layout'
import React from 'react'



const page = () => {
  return (
    <div className='flex flex-row'>
      <Layout>
        <div className="my-4">
          <span className="font-sans font-bold text-2xl p-2">Dashboard</span>
        </div>
        <Dashboard />

        
      </Layout>
    </div>
  )
}

export default page
