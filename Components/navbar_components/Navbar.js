import React, { useEffect, useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineMenu} from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { motion} from "framer-motion";
import NightModeIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import OutsideClickHandler from "react-outside-click-handler";
import Swal from "sweetalert";

// import { ethers } from 'ethers';
import Image from "next/image";
import { setTheme } from "@/store/reducers/Theme";
import { Web3Button } from "@web3modal/react";
import { useAccount, useBalance } from "wagmi";
import {
  updateAddress,
  setBalance,
} from "@/store/reducers/AppReducer";
import axios from "axios";

const Navbar = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);
  const { User, token } = useSelector((state) => state.App);
  // const textTheme = theme ? "text-slate-950" : "text-slate-400";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-[#0A0D0D]";
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setShowmenu(!showmenu);
  };
  const hideMenu = () => {
    setShowmenu(false);
  };

  const textTheme = !theme ? "text-slate-950" : "text-slate-300";

  // Define the SweetAlert configuration
  const comingSoonAlertConfig = {
    title: "Coming Soon",
    text: "Stay tuned for exciting updates!",
    icon: "info",
    button: {
      text: "Got it",
      className: "SweetAlertButton", // Add your custom class name here
    },
    closeOnClickOutside: false, // Prevent closing on clicking outside the dialog
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

  const handleClick = () => {
    Swal(comingSoonAlertConfig);
  };
  const handleClaim = () => {
    Swal(claimConfig);
  };

  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
    token: token,
    
  });

  const sendWalletAddress = async () => {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://bandbindex.com/"
        : "http://localhost:3000";
    try {
      const response = await axios.post(
        `${baseUrl}/api/wallet`,
        {
          address: address,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );
      console.log(response.data); // { msg: "Wallet inserted successfully" }
    } catch (error) {
      console.error("Error sending wallet address:", error);
    }
  };
  useEffect(() => {
    console.log(isConnecting, isDisconnected, isError);
    console.log("data",data,"isLoading:",isLoading);
    if (data && !isLoading) {
      dispatch(setBalance(data?.formatted));
    } else {
      dispatch(setBalance(0));
    }
  }, [data,isLoading]);
  useEffect(() => {
    console.log("address:", address);
    if (address) {
      dispatch(updateAddress(address));
      sendWalletAddress();
    }else{
      
      dispatch(updateAddress(""));
    }
  }, [address]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        hideMenu();
      }}
    >
      <div ref={navbarRef} className={backgroundTheme}>
        <nav
          // style={{ backgroundColor: theme ? "black" : "white" }}
          className={`navbar ${
            theme ? "bg-[#0A0D0D]" : "bg-slate-300"
          } px-[1vw] sticky top-0  `}
        >
          <div className='logo-menu'>
            <div className='menu-icon' onClick={toggleMenu}>
              {showmenu ? (
                <HiOutlineX color={"#F5900C"} size={35} />
              ) : (
                <HiOutlineMenu color={"#F5900C"} size={35} />
              )}
            </div>
            <Link href='/'>
              <motion.div className='logos'>
                <motion.div
                  animate={{ rotate: isHovered ? 720 : 0 }} // rotates the Image by 360 degrees on hover
                  transition={{ duration: 0.3, delay: 0.1 }} // you can adjust this for desired rotation speed
                >
                  <Image
                    src={"/assets/images/logo.png"}
                    alt='Logo'
                    width={35}
                    height={35}
                    style={{ verticalAlign: "middle", marginRight: "1px" }}
                  />
                </motion.div>
                <motion.h4
                  whileHover={{ x: 50 }}
                  onHoverStart={() => setIsHovered(true)} // sets the state to true when hovering starts
                  onHoverEnd={() => setIsHovered(false)} // sets the state to false when hovering ends
                  className={`${textTheme}`}
                >
                  BandBindex
                </motion.h4>
              </motion.div>
            </Link>
          </div>
          <menu>
            <motion.ul
              className={`${
                theme ? "bg-[#0A0D0D]" : "bg-slate-300"
              } nav-menu md:w-[65vw]`}
              id={showmenu ? "mobile" : "hide"}
            >
              <div className='md:flex md:justify-between w-[60%]'>
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  className={`${textTheme} relative left-2 border-b-[1px] border-Gold border-opacity-`}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    duration: 0.1,
                  }}
                  onClick={() => {
                    hideMenu();
                  }}
                >
                  <Link legacyBehavior href='/'>
                    <a>{"Home"}</a>
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  className={`${textTheme} relative left-2 border-b-[1px] border-Gold border-opacity-`}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    duration: 0.1,
                  }}
                >
 <Link legacyBehavior href=''>
  <a onClick={(e) => {
    e.preventDefault();
    hideMenu();
    handleClick();
  }}>
    {"Cryptocurrencies"}
  </a>
</Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  className={`${textTheme} relative left-2 border-b-[1px] border-Gold border-opacity-`}
                  // style={{ borderBottom: "none" }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    duration: 0.1,
                  }}
                  onClick={() => {
                    hideMenu();
                  }}
                >
                  <Link legacyBehavior href='/insights'>
                    <a>{"Insights"}</a>
                  </Link>
                </motion.li>
              </div>
              <div className='icon flex w-[40%] justify-between items-center'>
                <div className='flex justify-around relative left-[4vw] w-[40%] items-center'>
                  <Link
                    onClick={() => {
                      User == "" ? handleClaim() : null;
                    }}
                    href={User == "" ? "#soon" : "/claim"}
                    style={{ fontSize: 25, color: "#F5900C" }}
                  >
                    <DiamondOutlinedIcon
                      style={{
                        fontSize: 25,
                        color: "#F5900C",
                        cursor: "pointer",
                      }}
                    />
                  </Link>

                  <i
                    onClick={() => {
                      dispatch(setTheme(!theme));
                    }}
                  >
                    {theme ? (
                      <NightModeIcon
                        color='white'
                        style={{
                          fontSize: 25,
                          color: "#F5900C",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <WbSunnyIcon
                        color='white'
                        style={{
                          fontSize: 25,
                          color: "#F5900C",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </i>
                </div>
                {/* <Link href={"/"}>
                <AccountCircleIcon
                  color='white'
                  style={{ fontSize: 25, color: "#F5900C" }}
                />
              </Link> */} 
                <Web3Button
                  // className='bg-white'
                  // style={{ backgroundColor: "white" }}
                  balance='hide'
                  // label={"INDEX"}
                />
              </div>
            </motion.ul>
          </menu>
        </nav>
        {children}
      </div>
    </OutsideClickHandler>
  );
};

export default Navbar;
