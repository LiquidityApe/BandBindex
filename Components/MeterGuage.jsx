import { useEffect, useRef } from "react";

const MeterGauge = ({ value }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    // Function to update the path and pointer
    function update() {
      // Get references to the SVG, path, and pointer elements
      const svg = svgRef.current;
      const path = pathRef.current;
      const pointer = pointerRef.current;

      // Get the size of the SVG element
      const size = svg.getBoundingClientRect().width;

      // Calculate the radius of the semi-circle
      const radius = size / 2;

      // Update the d attribute of the path element
      path.setAttribute(
        "d",
        `M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,0 ${
          radius * 2
        },0`
      );

      // Calculate the angle of the pointer based on the value
      const angle = (value / 100) * 180 - 90;

      // Update the transform attribute of the pointer element
      pointer.setAttribute(
        "transform",
        `translate(${size / 2},${size / 2}) rotate(${angle})`
      );
    }

    // Update the path and pointer initially
    update();

    // Update the path and pointer whenever the window is resized
    window.addEventListener("resize", update);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", update);
    };
  }, [value]);

  return (
    <div style={{ width: "300px" }}>
      <svg ref={svgRef} width='100%'>
        <path ref={pathRef} stroke='#000000' strokeWidth='10' fill='none' />
        <line
          ref={pointerRef}
          x1='0'
          y1='0'
          x2='0'
          y2='-100'
          stroke='#ff0000'
          strokeWidth='5'
        />
      </svg>
    </div>
  );
};

export default MeterGauge;
