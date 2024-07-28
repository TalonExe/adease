
import Layout from '@/components/Layout'
import React from 'react'
import {
    IconCopy,
} from "@tabler/icons-react";


const page = () => {
  return (
    <div className='flex '>
      <Layout>
        <div className="flex flex-col items-start my-4 p-4 h-full w-full">
            <div className="flex flex-row px-8 w-full">
                <span className="font-sans font-bold text-2xl">Generated Keywords</span>
                <IconCopy className="h-6 w-6 ml-2" />
            </div>
            <div className='flex flex-row w-11/12'>
                <input type="text" className='flex px-8 py-2 ml-10 my-6 rounded-md border-solid border-4' />
                    <button className="px-8 py-2 ml-10 my-6 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                        Add
                    </button>
                <div className='flex flex-row justify-end w-full pr-8'>
                    <button className="px-8 py-2 ml-10 my-6 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                        Regenerate
                    </button>
                    <button className="px-8 py-2 ml-10 my-6 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Edit
                    </button>
                </div>
            </div>
            {/* <div className="flex-row h-full px-4 py-4 md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex w-full mr-4"> */}
            <div className="px-4 py-4 md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 mx-8 h-full mb-8 w-11/12 mr-8">
            {/* <button className="px-8 py-2 ml-10 my-6 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                Add
            </button>
            <button className="px-8 py-2 ml-10 my-6 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                Add
            </button> */}
            
            </div>
            
          
        </div>
      </Layout>
    </div>
  )
}

export default page
