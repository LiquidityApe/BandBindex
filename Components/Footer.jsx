import Image from "next/image";
import React, { useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { motion, stagger } from "framer-motion";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/reducers/Theme";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);
  const animationLeft = useAnimation();
  const animationCenter = useAnimation();
  const animationRight = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const textTheme2 = !theme ? "text-slate-950" : "text-slate-100";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";
  const backgroundTheme2 = !theme ? "bg-slate-300" : "bg-[#0A0D0D]";

  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      animationLeft.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", duration: 0.85, ease: "easeInOut" },
      });
      animationCenter.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.85,
          ease: "easeInOut",
          delay: 0.2,
        },
      });
      animationRight.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.85,
          ease: "easeInOut",
          delay: 0.4,
        },
      });
    } else {
      animationLeft.start({
        x: -500,
        opacity: 0,
        transition: { type: "tween", duration: 0.85, ease: "easeInOut" },
      });
      animationCenter.start({
        x: -500,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.85,
          ease: "easeInOut",
          delay: 0.2,
        },
      });
      animationRight.start({
        x: -500,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.85,
          ease: "easeInOut",
          delay: 0.4,
        },
      });
    }
  }, [inView, animationLeft, animationRight, animationCenter]);

  return (
    <footer
      ref={ref}
      className={`${backgroundTheme2} relative footer-distributed`}
    >
      <motion.div animate={animationLeft} className={`footer-left`}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            src={"/assets/images/logo.png"}
            alt='Logo'
            width={35}
            height={35}
            style={{ verticalAlign: "middle", marginRight: "1px" }}
          />
          <h3 className={textTheme2}>BandBindex</h3>
        </div>

        <br></br>
        <div className='footer-about'>
          <p className='footer-company-about'>
            Combining technical and social analysis, the Bear and Bull Index
            gives a holistic market view. Useful for less-experienced investors
            seeking informed choices in cryptoverse.
          </p>
        </div>
        <br></br>
        <p className={`${textTheme2} animate-pulse footer-company-name`}>
          <font style={{ color: "#F5900C" }}>Ⓒ</font> 2023{" "}
          <a
            href='http://niti.com.ng/'
            target='_blank'
            className=''
            rel='noopener noreferrer'
          >
            {" "}
            Neroitech Inventions
          </a>{" "}
          Ltd.
        </p>
      </motion.div>
      <div
        className={`${backgroundTheme} h-[95%] hidden md:flex w-[1px] opacity-10 top-2 left-[30%] self-center absolute`}
      ></div>
      <div
        className={`${backgroundTheme} h-[95%] w-[1px] hidden md:flex opacity-20 top-2 left-[65%] self-center absolute`}
      ></div>

      <motion.div animate={animationCenter} className={`footer-center`}>
        <div>
          <i className='fa fa-envelope'>
            <LinkIcon style={{ fontSize: 25, color: "#F5900C" }} />
          </i>
          <p>
            <b className={textTheme2}>QUICK LINKS</b>
          </p>
        </div>

        <div>
          <i className='fa fa-envelope'>
            <ArticleIcon style={{ fontSize: 25, color: "#F5900C" }} />
          </i>
          <p>
            {" "}
            <a
              href='https://bandbindex.gitbook.io/bandbindex-2.0-whitepaper/'
              target='_blank'
              rel='noopener noreferrer'
              className={`${backgroundTheme2} ${textTheme2} hover:text-[#f5900c]`}
            >
              Project WhitePaper
            </a>
          </p>
        </div>

        <div>
          <i className='fa fa-envelope'>
            <QuizIcon style={{ fontSize: 25, color: "#F5900C" }} />
          </i>
          <p>
            {" "}
            <a
              href='/faq'
              target='_blank'
              rel='noopener noreferrer'
              className={`${backgroundTheme2} ${textTheme2} hover:text-[#f5900c]`}
            >
              Support
            </a>
          </p>
        </div>

        <div>
          <i className='fa fa-envelope'>
            <DiamondOutlinedIcon style={{ fontSize: 25, color: "#F5900C" }} />
          </i>
          <p>
            <a
              href='/claim'
              target='_blank'
              rel='noopener noreferrer'
              className={`${backgroundTheme2} ${textTheme2} hover:text-[#f5900c]`}
            >
              Claim Rewards
            </a>
          </p>
        </div>

        <div>
          <i className='fa fa-envelope'>
            {theme ? (
              <ToggleOffIcon
                color='white'
                style={{
                  fontSize: 25,
                  color: "#F5900C",
                }}
              />
            ) : (
              <ToggleOnIcon
                color='white'
                style={{
                  fontSize: 25,
                  color: "#F5900C",
                }}
              />
            )}
          </i>

          <p>
            <a
              href='#?theme=switch'
              className={`${backgroundTheme2} ${textTheme2} hover:text-[#f5900c]`}
              onClick={() => {
                dispatch(setTheme());
              }}
            >
              Switch Theme
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div animate={animationRight} className='footer-right'>
        <p className={`${textTheme2} footer-company-about`}>
          <span className={`${backgroundTheme2} ${textTheme2}`}>
            <AnnouncementIcon style={{ fontSize: 25, color: "#F5900C" }} />
            &nbsp;DISCLAIMER
          </span>
          The website&apos;s information isn&apos;t investment, financial, or
          trading advice. Don&apos;t interpret its content as such. Do your
          research and seek professional advice for financial decisions.
        </p>

        <div className='footer-icons'>
          <a
            href='https://twitter.com/BandBindex'
            style={{ background: "#33383b" }}
          >
            <TwitterIcon />
          </a>
          <a
            href='https://t.me/bandbindex_official'
            style={{ background: "#33383b" }}
          >
            <TelegramIcon />
          </a>
          <a
            href='https://discord.gg/gExxutNThJ'
            style={{ background: "#33383b" }}
          >
            <ForumOutlinedIcon />
          </a>          
          <a
            href='https://www.linkedin.com/company/bandbindex/'
            style={{ background: "#33383b" }}
          >
            <LinkedInIcon />
          </a>
          <a
            href='https://github.com/LiquidityApe/BandBindex'
            style={{ background: "#33383b" }}
          >
            <GitHubIcon />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
