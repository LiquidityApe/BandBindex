import React, { useRef } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { boxDays } from "../data/Days";
import Box from "../Components/Box";
import { TiTime } from "react-icons/ti";
import SlideIn from "../Components/SlideIn";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert";
import {
  setClaimed,
  setDailyClaim,
  setPoint,
} from "../store/reducers/AppReducer";
import { motion } from "framer-motion";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import AccessAlarmsRounded from "@mui/icons-material/AccessAlarmsRounded";
import Footer from "@/Components/Footer";
import BackToTopButton from "@/Components/BackToTopButton";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import CountdownToLaunch from "@/Components/CountdownToLaunch";
import { withRouter } from "next/router";
import Link from "next/link";

const Claim = (props) => {
  const dispatch = useDispatch();
  const { Claimed, User } = useSelector((state) => state.App);
  const [timeLeft, setTimeLeft] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(null);
  const [totalLeft, setTotalLeft] = useState(null);
  const [lastClaimed, setLastClaimed] = useState(null);
  const [dailyClaimed, setDailyClaimed] = useState(null);
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-300";
  const textTheme2 = theme ? "text-teal-100" : "text-teal-950";
  const colorTheme = theme ? "bg-[#EDF1E4]" : "bg-slate-950";
  const colorTheme2 = !theme ? "bg-[#EDF1E4]" : "bg-slate-950";
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bandbindex.com/"
      : "http://localhost:3000";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const claimConfig = {
    title: "Login ",
    text: "Connect your wallet to claim $INDEX ",
    icon: "info",
    button: {
      text: "Got it",
      className: "SweetAlertButton", // Add your custom class name here
    },
    closeOnClickOutside: false, // Prevent closing on clicking outside the dialog
  };

  const handleClaim = () => {
    if (User === "") {
      Swal(claimConfig);
    } else {
      return;
    }
  };

  // UseEffect
  useEffect(() => {
    if (lastClaimed !== null) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const hours = 23 - now.getHours();
        const minutes = 59 - now.getMinutes();

        const seconds = 59 - now.getSeconds();
        const timeString = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        setTimeLeft(timeString.split("-").join(""));
      }, 1000);

      // Clean up the interval on unmount
      return () => clearInterval(intervalId);
    }
  }, [lastClaimed]);

  useEffect(() => {
    // Get the current date and set the time to 00:00:00.000
    let now = new Date();
    now.setHours(0, 0, 0, 0);
    // Assuming lastClaim is a Date object, set the time to 00:00:00.000

    let lastClaimDate = new Date(lastClaimed);
    lastClaimDate.setHours(0, 0, 0, 0);
    // console.log(now.getTime() > lastClaimDate.getTime());
    now.getTime() > lastClaimDate.getTime()
      ? dispatch(setClaimed(false))
      : dispatch(setClaimed(true));

    if (points == null) {
      dispatch(setClaimed(false));
      return;
    }
  }, [lastClaimed]);

  const updatePoints = () => {
    // Create a function to fetch totalClaim
    const fetchTotalClaim = axios.post(`${baseUrl}/api/totalClaim`);

    // Create another function to fetch points
    const fetchPoints = axios.post(`${baseUrl}/api/points`, { address: User });

    // Use Promise.all to execute both requests concurrently
    Promise.all([fetchTotalClaim, fetchPoints])
      .then((responses) => {
        const totalClaimResponse = responses[0];
        const pointsResponse = responses[1];

        // Handle the totalClaim response
        const indexLeft = 1000000 - totalClaimResponse.data.totalPoints;
        setTotalLeft(indexLeft);

        // Handle the points response
        const claimData = pointsResponse.data;
        setPoints(claimData.points);
        setLastClaimed(claimData.lastClaim);
        setDailyClaimed(claimData.dailyClaim);
        dispatch(setDailyClaim(claimData.dailyClaim));
        dispatch(setPoint(claimData.points));
      })
      .catch((error) => {
        console.error("Error", error);
        // You could also set some state here to show an error message to the user
        // setErrorMessage('Failed to update points. Please try again.');
      });
  };

  useEffect(() => {
    if (!points) {
      updatePoints();
    }
  }, [isOpen, User, points]);

  // FUNCTIONS;
  const sendPoints = async (address, points) => {
    try {
      const result = await axios.post(`${baseUrl}/api/claim`, {
        address: address,
        points: points,
        lastClaim: new Date(),
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClaim = () => {
    dispatch(setClaimed(true));
    setIsOpen(true);
    sendPoints(User, dailyClaimed);
  };

  return (
    <div className={textTheme}>
      <div
        className={` ${colorTheme} relative min-h-screen flex  justify-center flex-col`}
      >
        <motion.h1
          initial={{ scale: [0], rotate: [0] }}
          animate={{
            scale: [0, 0.2, 0.4, 1, 0.8, 1],
            rotate: [],
          }}
          className='mb-5 absolute top-2 s:top-3 right-3 s:right-4 text-sm flex items-center justify-center font-normal space-x-1'
        >
          <AnnouncementOutlinedIcon
            color='white'
            style={{ fontSize: 25, color: "#F5900C" }}
          />
          <div className={textTheme}>
            <a
              href='https://discord.gg/gExxutNThJ'
              target='_blank'
              rel='noopener text-sm noreferrer'
            >
              Give Feedback
            </a>
          </div>
        </motion.h1>
        {/* <div className='relative scale-90 s:scale-100  top-[2vh] mb-[4vh]'>
          <CountdownToLaunch />
        </div> */}
        <div className='px-5  relative bottom-[0vh] s:bottom-[6vh] min-h-[60vh] flex items-center'>
          {User.length === 0 ? (
            handleClaim()
          ) : (
            <div className='max-w-max px-5 mx-auto  flex flex-col items-center'>
              <motion.h1
                initial={{ scale: [0], rotate: [0] }}
                animate={{
                  scale: [0, 0.2, 0.4, 1, 0.8, 1],
                  rotate: [],
                }}
                className='mb-5 text-xl font-bold'
              >
                <center>
                  <Image
                    src={"/assets/images/token.png"}
                    alt='Logo'
                    width={100}
                    height={100}
                    className='rotating-image' // Apply the CSS class here
                  />
                </center>
                <div className={textTheme}>
                  You have {points || 0} Index Rewards!
                </div>
              </motion.h1>
              <div className=' flex flex-col items-start text-[13px] mb-5 rectangular-component'>
                <h2 className='mb-5'>{props.title}</h2>
                <div className='flex flex-wrap justify-start md:flex-nowrap'>
                  {boxDays.map((box) => {
                    return (
                      <Box key={box.day} day={box.day} sticks={box.points} />
                    );
                  })}
                </div>
                <p className='mt-4'>
                  Get ready to claim{" "}
                  <span className='text-teal-600 font-bold'>
                    {dailyClaimed}
                  </span>{" "}
                  $INDEX 🚀 next time you log in!
                </p>

                <p className='mb-2'>
                  Unlock bigger rewards by logging in for 7 days straight.
                </p>

                <button
                  onClick={onClaim}
                  disabled={Claimed}
                  className={`w-full py-2 flex justify-center items-center rounded ${colorTheme2} ${textTheme2} disabled:bg-gray-500`}
                >
                  {Claimed ? (
                    <>
                      Come back in <TiTime /> {timeLeft}
                    </>
                  ) : (
                    <> Collect {dailyClaimed} Sticks</>
                  )}{" "}
                </button>

                <SlideIn
                  isOpen={isOpen}
                  onClose={() => {
                    updatePoints();
                    setIsOpen(false);
                  }}
                />
              </div>
              {totalLeft !== null && (
                <motion.h1
                  initial={{ scale: [0], rotate: [0] }}
                  animate={{
                    scale: [0, 0.2, 0.4, 1, 0.8, 1],
                    rotate: [],
                  }}
                  className='mb-5 text-sm flex items-center font-normal'
                >
                  <AccessAlarmsRounded
                    color='white'
                    style={{ fontSize: 25, color: "#F5900C" }}
                  />
                  &nbsp;
                  <div className={textTheme}>
                    There&apos;s only{" "}
                    <span className='font-bold'>
                      {totalLeft.toLocaleString()} Index
                    </span>{" "}
                    left to claim
                  </div>
                </motion.h1>
              )}
            </div>
          )}
        </div>
        <b>
          <BackToTopButton />
        </b>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Claim);
