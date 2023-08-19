import { animate, motion } from "framer-motion";

const DrawingComponent = () => {
  const size = 20; // Size of the square
  const angle = 45; // Angle in degrees for the slanted angle

  return (
    <motion.svg
      initial={{ rotate: 0 }}
      animate={{ rotate: 720 }}
      transition={{ duration: 2, repeatDelay: 2, repeat: 5 }}
      className={"absolute top-[5vh] right-[5vw]"}
      width={size}
      height={size}
    >
      {/* Square */}
      <path
        d={`M 0 0 L ${size} 0 L ${size} ${size} L ${
          size - size * Math.tan((angle * Math.PI) / 180)
        } ${size} Z`}
        fill='#9A031E'
      />

      {/* Slanted angle */}
      <path
        d={`M ${size} ${size} L ${size} ${
          size - size * Math.tan((angle * Math.PI) / 180)
        } L ${size - size * Math.tan((angle * Math.PI) / 180)} ${size} Z`}
        fill='#07f307'
      />
    </motion.svg>
  );
};

export default DrawingComponent;

// const DrawingComponent = () => {
//   const angle = 45; // Angle in degrees
//   const length = 100; // Length of the line

//   // Calculate the end coordinates of the line
//   const x1 = 0;
//   const y1 = 0;
//   const x2 = length * Math.cos((angle * Math.PI) / 180);
//   const y2 = length * Math.sin((angle * Math.PI) / 180);

//   return (
//     <svg width='200' height='200'>
//       <line x1={x1} y1={y1} x2={x2} y2={y2} stroke='black' />
//     </svg>
//   );
// };

// export default DrawingComponent;
