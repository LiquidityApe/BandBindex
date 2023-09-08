const SemiCircle = ({ guage = -30 }) => {
  return (
    <svg height='300' width='300'>
      <path
        d='M 150,210,m -80,0 a 45,45 0 1,1 160,0'
        stroke='#9B9388'
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

export default SemiCircle;
