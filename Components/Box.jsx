import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkmark from "./Checkmark";

const bg =
  "rounded mr-3 mb-2  flex flex-col items-center justify-center space-y-3 w-[66px] h-[66px] md:w-20 md:h-20 border-2 border-Gold";

const Box = ({ sticks, day }) => {
  const dailyClaim = useSelector((state) => state.App.dailyClaim);
  // console.log(dailyClaim);

  const bg1 = dailyClaim <= sticks ? null : "bg-gray-950";

  return (
    <div className={`${bg} + ${bg1}`}>
      {dailyClaim > sticks ? (
        <Checkmark />
      ) : (
        <strong className='text-2xl  text-Gold'>+{sticks}</strong>
      )}
      <p className='text-Gold'>Day {day}</p>
    </div>
  );
};

export default Box;
