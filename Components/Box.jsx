import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkmark from "./Checkmark";

const bg =
  "rounded mr-3 mb-2  flex flex-col items-center justify-between space-y-3 w-[58px] h-[58px] s:w-[66px] s:h-[66px] md:w-20 md:h-20 border-2 border-Gold";

const Box = ({ sticks, day }) => {
  const dailyClaim = useSelector((state) => state.App.dailyClaim);
  // console.log(dailyClaim);

  const bg1 = dailyClaim <= sticks ? null : "bg-gray-950";

  return (
    <div className={`${bg} + ${bg1}`}>
      <div className='mt-1'>
        {dailyClaim > sticks ? (
          <Checkmark />
        ) : (
          <strong className=' text-xl s:text-2xl  text-Gold'>+{sticks}</strong>
        )}
      </div>
      <p className='text-Gold relative bottom-[6px]'>Day {day}</p>
    </div>
  );
};

export default Box;
