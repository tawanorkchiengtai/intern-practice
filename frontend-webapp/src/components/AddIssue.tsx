"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
  Combobox,
} from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addIssue } from "@/libs/postgres";

interface AddIssueProps {
  isOpen: boolean;
  closeModal: () => void;
}

const statusOptions = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
const riskOptions = ["Urgent", "High", "Medium", "Low", "None"];

export function AddIssue({ isOpen, closeModal }: AddIssueProps) {
  const [issueName, setIssueName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const [selectedRisk, setSelectedRisk] = useState(riskOptions[0]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

        const start = startDate ? startDate.toDate() : null;
      const end = endDate ? endDate.toDate() : null;
      
      const result = await addIssue(
        issueName,
        selectedStatus,
        selectedRisk,
        start,
        end
      );
      console.log("Issue added:", result);
      // Handle successful project addition (e.g., show a success message, update the UI)
      closeModal();
    } catch (error) {
      console.error("Failed to add Issue:", error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  <div className="flex items-center">
                    <div className="h-full flex items-center gap-1.5 border-[0.5px] border-gray-200 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5">
                      <span className="flex-grow truncate max-w-40">test</span>
                    </div>
                    <h3 className="text-xl font-medium text-custom-text-200 pl-2">
                      Create Issue
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6 pb-5">
                      <div className="grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-4">
                        <div className="md:col-span-3">
                          <input
                            id="name"
                            type="text"
                            name="name"
                            className="block bg-transparent text-sm placeholder-custom-text-400 focus:outline-none rounded-md border-[0.5px] border-custom-border-200 px-3 py-2 w-full focus:border-blue-400"
                            placeholder="Title"
                            value={issueName}
                            onChange={(e) => setIssueName(e.target.value)}
                          />

                          <span className="text-xs text-red-500"></span>
                        </div>
                        <div className="md:col-span-4">
                          <textarea
                            id="description"
                            name="description"
                            className="no-scrollbar w-full bg-transparent px-3 py-2 placeholder-custom-text-400 outline-none rounded-md border-[0.5px] border-custom-border-200 !h-24 text-sm focus:border-blue-400"
                            placeholder="click to add description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex ">
                        <div className="h-full px-2 " data-headlessui-state="">
                          <button
                            type="button"
                            className="clickable block h-full outline-none cursor-pointer truncate max-w-40"
                            id="headlessui-combobox-button-:rc9:"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <div className="h-full py-1.5 flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-gray-200 rounded text-xs px-2 py-0.5">
                              <span className="flex items-center px-1 truncate ">
                                Backlog
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className="h-full " data-headlessui-state="">
                          <button
                            type="button"
                            className="clickable block h-full outline-none cursor-pointer truncate max-w-40"
                            id="headlessui-combobox-button-:rc9:"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <div className="h-full py-1.5 flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-gray-200 rounded text-xs px-2 py-0.5">
                              <span className="flex items-center px-1 truncate ">
                                None
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className="h-full px-2 " data-headlessui-state="">
                          {/* <button
                                type="button"
                                className="clickable block h-full outline-none cursor-pointer truncate max-w-40"
                                id="headlessui-combobox-button-:rc9:"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <div className="h-full py-1.5 flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-gray-200 rounded text-xs px-2 py-0.5">
                                  <span className="flex items-center px-1 truncate "><MdOutlineCalendarMonth/> <div className="px-0.5"></div>Start date</span>
                                </div>
                              </button> */}

                          <DatePicker
                            label="Start date"
                            slotProps={{ textField: { size: "small" } }}
                            value={startDate}
                            onChange={(value) => {
                              setStartDate(value);
                              
                            }}
                          />
                        </div>
                        <div className="h-full px-2 " data-headlessui-state="">
                          <DatePicker
                            label="End date"
                            slotProps={{ textField: { size: "small" } }}
                            value={endDate}
                            onChange={(value) => {
                              setEndDate(value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end border-t pt-3">
                      <button
                        type="button"
                        className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        onClick={closeModal}
                      >
                        Create Issue
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </LocalizationProvider>
  );
}
