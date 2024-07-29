"use client";

import Layout from "@/components/Layout";
import React, { useState } from "react";
import Dnd from "@/components/Dnd";

const Page = () => {
  return (
    <Layout>
      <div className="p-4 px-8 my-4 w-full h-full">
        <div className="flex flex-row w-full justify-between mb-4">
          <span className="font-sans font-bold text-2xl p-2">
            Landing Page Generator
          </span>
          <button className="h-fit w-fit p-2 bg-black text-white rounded-md">
            Clear Draggable
          </button>
        </div>
        <Dnd />
      </div>
    </Layout>
  );
};

export default Page;
