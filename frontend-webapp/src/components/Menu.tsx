'use client';

import { PiHouseLine } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { Dialog, Transition,  } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { GoPlus } from "react-icons/go";
import { PiGreaterThan } from "react-icons/pi";
import { AddProject } from "./AddProject";

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const allCars = await getCars();
  //     setCars(allCars.data);
  //   } catch (error) {
  //     console.error("Failed to fetch cars:", error);
  //   }
  // };

  // const isProjectEmpty = !cars || cars.length < 1;
  return (
    <div className="flex h-full w-full flex-col border-gray-200 border-r">
      <div className=" cursor-pointer space-y-2 p-4">
        <a href="/">
          <span className="my-1 block w-full">
            <div className="group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium outline-none hover:bg-gray-200 ">
              <PiHouseLine />
              <p className="leading-5">Home</p>
            </div>
          </span>
        </a>
        <button
  type="button"
  className="flex w-full items-center gap-2 px-3 text-sm text-custom-sidebar-text-200"
  onClick={() => setIsOpen(true)}
>
  <FaPlus />
  Add Project
</button>
 <AddProject
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
      </div>

      <div className="vertical-scrollbar h-full space-y-2 !overflow-y-scroll pl-4 scrollbar-md pr-1">
        <div
          data-rfd-droppable-id="favorite-projects"
          data-rfd-droppable-context-id=":r2:"
        ></div>
        <div
          data-rfd-droppable-id="joined-projects"
          data-rfd-droppable-context-id=":r5:"
        >
          <div className="flex flex-col" data-headlessui-state="">
            <div className="group flex w-full items-center justify-between rounded p-1.5 text-xs text-custom-sidebar-text-400 hover:bg-gray-200">
              <button
                type="button"
                className="group flex w-full items-center gap-1 whitespace-nowrap rounded px-1.5 text-left text-sm font-semibold text-custom-sidebar-text-400 hover:bg-custom-sidebar-background-80"
                id="headlessui-disclosure-button-:rp:"
                aria-expanded="false"
                data-headlessui-state=""
              >
                Your projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right h-3.5 w-3.5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
              <button className="group-hover:opacity-100" onClick={() => setIsOpen(true)}>
                <GoPlus/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
