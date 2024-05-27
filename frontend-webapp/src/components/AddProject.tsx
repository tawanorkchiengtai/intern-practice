'use client'

import { addProject } from "@/libs/postgres";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";

interface AddProjectProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function AddProject({ isOpen, closeModal }: AddProjectProps) {

    const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    try {
      const result = await addProject({ name: projectName, description });
      closeModal();
      console.log("Project added:", result);
      // Handle successful project addition (e.g., show a success message, update the UI)
      
    } catch (error) {
      console.error("Failed to add project:", error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className="relative w-full max-w-lg max-h-[90vh] 
                    overflow-y-auto transfrom rounded-2xl bg-white p-6 text-left shadow-xl
                    trasition-all flex flex-col gap-5"
              >
                <button
                  type="button"
                  className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600 focus:outline-none"
                  onClick={closeModal}
                >
                  {/* X button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  
                </button>
                <form className="px-3" onSubmit={handleSubmit}>
                  <div className="mt-9 space-y-6 pb-5">
                    <div className="grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-4">
                      <div className="md:col-span-3">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="block bg-transparent text-sm placeholder-custom-text-400 focus:outline-none rounded-md border-[0.5px] border-custom-border-200 px-3 py-2 w-full focus:border-blue-400"
                          placeholder="Project name"
                          value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}

                        />
                        
                        
                        <span className="text-xs text-red-500"></span>
                      </div>
                      <div className="md:col-span-4">
                        <textarea
                          id="description"
                          name="description"
                          className="no-scrollbar w-full bg-transparent px-3 py-2 placeholder-custom-text-400 outline-none rounded-md border-[0.5px] border-custom-border-200 !h-24 text-sm focus:border-blue-400"
                          placeholder="Description..."
                          value={description}
                      onChange={(e) => setDescription(e.target.value)}
                          
                          
                        ></textarea>
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex justify-end gap-2 pt-4 border-t border-custom-border-100">
                    <button
                      type="button"
                      className="text-custom-text-200 bg-custom-background-100 border border-custom-border-200 hover:bg-custom-background-90 focus:text-custom-text-300 focus:bg-custom-background-90 px-3 py-1.5 font-medium text-xs rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-blue-500 mr-3 hover:bg-blue-600 focus:text-custom-brand-40 focus:bg-custom-primary-200 px-3 py-1.5 font-medium text-xs rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center"
                      onClick={closeModal}
                      
                    >
                      Create project
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
