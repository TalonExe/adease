
"use client"
import Layout from '@/components/Layout'
import React, {useState} from 'react';
import Dnd from "@/components/Dnd"



export default function automation() {
    return(
        <>  
            <Layout>
                <div className="p-4 px-8 my-4">
                    <span className="font-sans font-bold text-2xl p-2">Automation</span>
                </div>
                <Dnd/>
            </Layout>
        </>
    )

}