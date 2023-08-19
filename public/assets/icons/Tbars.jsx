import React from "react";

function Tbars({ size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      stroke='#ff6600'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='3'
      className='icon  icon-tabler icon-tabler-antenna-bars-5'
      viewBox='0 0 24 24'
    >
      <path stroke='none' d='M0 0h24v24H0z'></path>
      <path d='M6 18v-3M10 18v-6M14 18V9'></path>
    </svg>
  );
}

export default Tbars;
