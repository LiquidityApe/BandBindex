import { motion } from "framer-motion";

const size = 200; // Adjust the size of the semi-circle

const SemiCircle2 = ({ guage = -30 }) => {
  const angle = 90; // Adjust the angle of the semi-circle (in degrees)

  return (
    <svg height='300' width='300'>
      <path
        d='M 150,210,m -80,0 a 45,45 0 1,1 160,0'
        stroke='#E7D8C3'
        strokeWidth='40'
        fill='none'
      />
      {/* Pointer */}
      <path
        d='M 150,210 L 155,200 L 150,125 L 145,200 Z'
        fill='black'
        transform={`rotate(${guage}, 150, 210)`}
      />
    </svg>
  );
};

export default SemiCircle2;
