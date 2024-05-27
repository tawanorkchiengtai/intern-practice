'use client'

import { useState } from "react";
import { PiHouseLine } from "react-icons/pi";
import { AddIssue } from "./AddIssue";

export default function Navbar({ id }: { id: string }) {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-[3.75rem] z-10 border-b border-b-gray-200 ">
      <a href="/">
        <span className="my-1 block w-full ">
          <div className="group flex w-full  justify-center items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium outline-none  ">
            {id === "home" ? (
              <>
                <PiHouseLine />
                <p className="leading-5">Home</p>
              </>
            ) : (
              null
            )}
          </div>
        </span>
      </a>
      {id === "issue" ? (
        <button
          type="button"
          className="text-white bg-blue-500 mr-3 hover:bg-blue-600 px-3 py-1.5 font-medium text-xs rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center"
          onClick={() => setIsOpen(true)}
          
        >
          <div className="hidden sm:block">Add</div> Issue
        </button>
      ) : null}
      <AddIssue
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
    />
    </div>
  )}