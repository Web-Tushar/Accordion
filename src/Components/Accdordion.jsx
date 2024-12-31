import React, { useState } from 'react'


const Accdordion = () => {
  const [AccordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className='py-2'>
      <button
        onClick={() => setAccordionOpen(!AccordionOpen)}
        className='flex  justify-between w-full'>
        <span>this is title</span>

        {/* {AccordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              AccordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              AccordionOpen && "!rotate-180"
            }`}
          />
        </svg>

      </button>
      <div className={`grid overflow-hidden transition-all duration-300 text-slate-600 text-sm ${AccordionOpen
          ? "grid-rows-[1fr] opacity-100"
          :
          "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden ">my name is tushar imran </div>
      </div>

    </div>
  )
}

export default Accdordion