import { MdNotInterested } from "react-icons/md";
import { PiCircleDashedBold } from "react-icons/pi";

export default function Issues() {
  return (
    <div className="h-full w-full overflow-hidden bg-zinc-100">
      <div>
          <div className="relative flex flex-shrink-0 flex-col border-[1px] border-transparent">
            <div className="sticky top-0 z-[3] w-full flex-shrink-0 border-b border-custom-border-200 bg-custom-background-90 px-3 pl-5 py-1">
              <div className="relative flex w-full flex-shrink-0 flex-row items-center gap-1.5 py-1.5">
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center overflow-hidden rounded-sm"></div>
                <div className="relative flex w-full flex-row items-center gap-1 overflow-hidden">
                  <div className="flex justify-center items-center line-clamp-1 truncate font-medium text-custom-text-100">
                  <PiCircleDashedBold/> <div className="px-1"></div> All Issues
                  </div>
                  <div className="pl-2 text-sm font-medium text-custom-text-300">1</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div> 
    
  );
}





// import { MdNotInterested } from "react-icons/md";

// export default function Issues() {
//   return (
//     <div className="h-full w-full overflow-hidden bg-zinc-100">
//       <div className="space-y-7 md:p-7 p-3 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-lg">
//         <div>
//           <div
//             className="relative flex flex-shrink-0 flex-col border-[1px] border-transparent"
//             data-drop-target-for-element="true"
//           >
//             <div className="sticky top-0 z-[3] w-full flex-shrink-0 border-b border-custom-border-200 bg-custom-background-90 px-3 pl-5 py-1">
//               <div className="relative flex w-full flex-shrink-0 flex-row items-center gap-1.5 py-1.5">
//                 <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center overflow-hidden rounded-sm"></div>
//                 <div className="relative flex w-full flex-row items-center gap-1 overflow-hidden">
//                   <div className="inline-block line-clamp-1 truncate font-medium text-custom-text-100">
//                     All Issues
//                   </div>
//                   <div className="pl-2 text-sm font-medium text-custom-text-300">
//                     1
//                   </div>
//                 </div>
//                 <div className="flex h-5 w-5 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-sm transition-all hover:bg-custom-background-80"></div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute top-0 left-0 h-full w-full items-center text-sm font-medium text-custom-text-300 rounded bg-custom-background-overlay justify-start hidden">
//                 <div className="p-3 my-8 flex flex-col rounded items-center">
//                   <span>
//                     The layout is ordered by{" "}
//                     <span className="font-semibold">Last Created</span>.
//                   </span>
//                   <span>Drop here to move the issue.</span>
//                 </div>
//               </div>
//               <div className="relative h-full w-full">
//                 <div
//                   className="relative"
//                   id="issue_6e25a716-484a-4fa8-b45f-307b2e498037_null_undefined"
//                   data-drop-target-for-element="true"
//                 >
//                   <div className="block h-[2px] w-full before:left-0 before:relative before:block before:top-[-2px] before:h-[6px] before:w-[6px] before:rounded after:left-[calc(100%-6px)] after:relative after:block after:top-[-8px] after:h-[6px] after:w-[6px] after:rounded absolute top-0 z-[2]"></div>
//                   <div className="relative ">
//                     <div className="group min-h-11 relative flex flex-col md:flex-row md:items-center gap-3 bg-custom-background-100 pl-1.5 pr-1 text-sm last:border-b-transparent">
//                       <div className="flex w-full truncate">
//                         <div className="flex flex-grow items-center gap-3 truncate">
//                           <div className="flex items-center gap-0.5">
//                             <div className="flex items-center group">
//                               <div className="w-[14px] h-[18px]"></div>
//                               <div className="flex h-5 w-5 items-center justify-center"></div>
//                             </div>
//                             <div className="pl-1 flex-shrink-0 text-xs font-medium text-custom-text-300">
//                               TEST-1
//                             </div>
//                           </div>
//                           <a
//                             href="/tawanworkspace/projects/e8308185-80ac-41ec-8523-4b8b9a8fe4b0/issues/6e25a716-484a-4fa8-b45f-307b2e498037"
//                             target="_blank"
//                             id="issue-6e25a716-484a-4fa8-b45f-307b2e498037"
//                             className="w-full truncate cursor-pointer text-sm text-custom-text-100"
//                           >
//                             <p className="truncate">wwwww-2</p>
//                           </a>
//                         </div>
//                         <div className="block md:hidden border border-custom-border-300 rounded ">
//                           <div
//                             className="relative w-min text-left"
//                             data-headlessui-state=""
//                           >
//                             <button
//                               type="button"
//                               className="relative grid place-items-center rounded p-1 text-custom-text-200 outline-none hover:text-custom-text-100 cursor-pointer hover:bg-custom-background-80"
//                               id="headlessui-menu-button-:rc8:"
//                               aria-haspopup="menu"
//                               aria-expanded="false"
//                               data-headlessui-state=""
//                             ></button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex flex-shrink-0 items-center gap-2">
//                         <div className="relative flex flex-wrap md:flex-grow md:flex-shrink-0 items-center gap-2 whitespace-nowrap">
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full outline-none cursor-pointer truncate max-w-40"
//                                 id="headlessui-combobox-button-:rc9:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5">
//                                   <span className="flex-grow truncate">
//                                     Backlog
//                                   </span>
//                                 </div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full max-w-full outline-none cursor-pointer"
//                                 id="headlessui-combobox-button-:rca:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 rounded text-xs py-0.5 hover:bg-custom-background-80 border-custom-border-300 px-0.5 border">
//                                   <div className=""></div>
//                                 </div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div
//                               className="w-auto max-w-full flex-shrink-0 text-left undefined"
//                               data-headlessui-state=""
//                             >
//                               <button
//                                 type="button"
//                                 className="clickable flex w-full items-center justify-between gap-1 text-xs cursor-pointer"
//                                 id="headlessui-combobox-button-:rcb:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="flex h-5 w-full flex-wrap items-center gap-2 overflow-hidden">
//                                   <div className="flex h-full items-center justify-center gap-2 rounded px-2.5 py-1 text-xs hover:bg-custom-background-80 border-[0.5px] border-custom-border-300"></div>
//                                 </div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full max-w-full outline-none cursor-pointer"
//                                 id="headlessui-combobox-button-:rcc:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5"></div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full max-w-full outline-none cursor-pointer"
//                                 id="headlessui-combobox-button-:rcd:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5"></div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full max-w-full outline-none cursor-pointer"
//                                 id="headlessui-combobox-button-:rce:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5"></div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full outline-none hover:bg-custom-background-80 cursor-pointer truncate max-w-40"
//                                 id="headlessui-combobox-button-:rcf:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5">
//                                   <div className="relative flex items-center max-w-full gap-1"></div>
//                                 </div>
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-5">
//                             <div className="h-full" data-headlessui-state="">
//                               <button
//                                 type="button"
//                                 className="clickable block h-full outline-none hover:bg-custom-background-80 cursor-pointer truncate max-w-40"
//                                 id="headlessui-combobox-button-:rcg:"
//                                 aria-haspopup="listbox"
//                                 aria-expanded="false"
//                                 data-headlessui-state=""
//                               >
//                                 <div className="h-full flex items-center gap-1.5 border-[0.5px] border-custom-border-300 hover:bg-custom-background-80 rounded text-xs px-2 py-0.5"></div>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="hidden md:block">
//                           <div
//                             className="relative w-min text-left"
//                             data-headlessui-state=""
//                           >
//                             <button
//                               type="button"
//                               className="relative grid place-items-center rounded p-1 text-custom-text-200 outline-none hover:text-custom-text-100 cursor-pointer hover:bg-custom-background-80"
//                               id="headlessui-menu-button-:rch:"
//                               aria-haspopup="menu"
//                               aria-expanded="false"
//                               data-headlessui-state=""
//                             ></button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="block h-[2px] w-full before:left-0 before:relative before:block before:top-[-2px] before:h-[6px] before:w-[6px] before:rounded after:left-[calc(100%-6px)] after:relative after:block after:top-[-8px] after:h-[6px] after:w-[6px] after:rounded absolute z-[2]"></div>
//                 </div>
//               </div>
//               {/* <div className="sticky bottom-0 z-[1] w-full flex-shrink-0">
//                 <div className="border-b border-t border-custom-border-200 bg-custom-background-100 ">
//                   <div className="flex w-full cursor-pointer items-center gap-2.5 p-6 py-3 text-custom-text-350 hover:text-custom-text-300">
//                     <span className="text-sm font-medium">New Issue</span>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }