import Image from 'next/image';
import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from '@mui/icons-material/Forum';
import RedeemIcon from "@mui/icons-material/Redeem";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/reducers/Theme';

const Footer = () => {
    const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.Theme);

  return (
      <footer className='footer-distributed'>
            <div className='footer-left'>
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
                <h3>BandBindex</h3>
              </div>

              <br></br>
              <div className='footer-about'>
                <p className='footer-company-about'>
                  Combining technical and social analysis, the Bear and Bull
                  Index gives a holistic market view. Useful for
                  less-experienced investors seeking informed choices in
                  cryptoverse.
                </p>
              </div>
              <br></br>
              <p className='footer-company-name'>
                <font style={{ color: "#F5900C" }}>Ⓒ</font> 2023{" "}
                <a
                  href='http://niti.com.ng/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {" "}
                  Neroitech Inventions
                </a>{" "}
                Ltd.
              </p>
            </div>

            <div className='footer-center'>
              <div>
                <i className='fa fa-envelope'>
                  <LinkIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  <b className='text-white'>QUICK LINKS</b>
                </p>
              </div>

              <div>
                <i className='fa fa-envelope'>
                  <ArticleIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  {" "}
                  <a
                    href='https://bandbindex.gitbook.io/bandbindex-2.0-whitepaper/project-details/disclaimer'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-[#f5900c]'
                  >
                    Project WhitePaper
                  </a>
                </p>
              </div>

              <div>
                <i className='fa fa-envelope'>
                  <ForumIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  {" "}
                  <a
                    href='https://t.me/bandbindex_official'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-[#f5900c]'
                    
                  >
                    Join Community
                  </a>
                </p>
              </div>

              <div>
                <i className='fa fa-envelope'>
                  <RedeemIcon style={{ fontSize: 25, color: "#F5900C" }} />
                </i>
                <p>
                  <a
                    href='/claim'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-[#f5900c]'
                    
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
                    href='#switchtheme'
                    className='text-white hover:text-[#f5900c]'
                    
                    onClick={() => {
                      dispatch(setTheme());
                    }}
                  >
                    Switch Theme
                  </a>
                </p>
              </div>
            </div>

            <div className='footer-right'>
              <p className='footer-company-about'>
                <span>
                  <AnnouncementIcon
                    style={{ fontSize: 25, color: "#F5900C" }}
                  />{" "}
                  DISCLAIMER
                </span>
                The website&apos;s information isn&apos;t investment, financial,
                or trading advice. Don&apos;t interpret its content as such. Do
                your research and seek professional advice for financial
                decisions.
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
            </div>
          </footer>
  )
}

export default Footer