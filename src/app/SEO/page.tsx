"use client";

import Layout from "@/components/Layout";
import React, { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import Badge from "@/components/ui/Badge";

const page = () => {
  const [word, setWord] = useState("");
  const [keywords, setKeywords] = useState([
    "blue",
    "well",
    "manage",
    "excuse",
    "helmet",
    "material",
    "shape",
    "pilot",
    "copyright",
  ]);
  const [edit, setEdit] = useState(false);

  const handleAdd = () => {
    setKeywords((words) => [...words, word]);
    setWord("");
    console.log(keywords);
  };

  const badges = (
    <div className="px-4 py-4 bg-neutral-100 dark:bg-neutral-800 mx-8 h-full mb-8 w-11/12 mr-8 ">
      <div className="h-fit flex flex-row flex-wrap">
        {keywords.map((keyword) => {
          return <Badge title={keyword} />;
        })}
      </div>
    </div>
  );

  const editBadges = (
    <textarea
      className="px-4 py-4 bg-neutral-100 dark:bg-neutral-800 mx-8 h-full mb-8 w-11/12 mr-8"
      name=""
      id=""
      value={keywords.map((keyword) => {
        return keyword;
      })}
    ></textarea>
  );

  return (
    <Layout>
      <div className="flex flex-col items-start my-4 p-4 h-full w-full">
        <div className="flex flex-row px-8 w-full">
          <span className="font-sans font-bold text-2xl">
            Generated Keywords
          </span>
          <IconCopy className="h-6 w-6 ml-2" />
        </div>
        <div className="flex flex-row w-11/12">
          <input
            type="text"
            className="flex px-8 py-2 ml-10 my-6 rounded-md border-solid border-4"
            onChange={(e) => setWord(e.target.value)}
            value={word}
          />
          <button
            onClick={() => handleAdd()}
            className="px-8 py-2 ml-10 my-6 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
          >
            Add
          </button>
          <div className="flex flex-row justify-end w-full pr-8">
            <button className="px-8 py-2 ml-10 my-6 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
              Regenerate
            </button>
            <button
              onClick={() => setEdit((edit) => !edit)}
              className="px-8 py-2 ml-10 my-6 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            >
              {edit ? "Submit" : "Edit"}
            </button>
          </div>
        </div>
        {edit ? editBadges : badges}
      </div>
    </Layout>
  );
};

export default page;
