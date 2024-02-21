import React from "react";
import { Helmet } from "react-helmet";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home title</title>
        <meta
          property="og:image"
          content="https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I="
        />
        <meta property="og:title" content="Home Image title" />
        <meta property="og:description" content="Home Image description" />
      </Helmet>
      Home
      <FacebookShareButton
        url={"https://react-social-test-delete-2mdp.vercel.app/"}
      >
        <FacebookIcon size={32} round={true} style={{ color: "black" }} />
      </FacebookShareButton>
    </div>
  );
};

export default Home;
