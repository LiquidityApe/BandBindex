import React from "react";
import { motion } from "framer-motion";

function Checkmark() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      version='1.1'
      viewBox='0 0 6.479 6.479'
    >
      <g
        scale={1}
        fill='#fff'
        fillOpacity='1'
        stroke='#050501'
        strokeWidth='0.5'
        display='inline'
        transform='translate(-.73 -.62)'
      >
        <motion.circle
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1.2, pathOffset: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          cx='3.969'
          cy='3.86'
          r='3.107'
          stroke={"#f5900c"}
          strokeWidth={0.3}
        ></motion.circle>
        <motion.path
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          d='M 2.9075169,3.7713922 3.7787342,4.6203372 5.4728912,3.011185'
        ></motion.path>
      </g>
    </svg>
  );
}

export default Checkmark;
