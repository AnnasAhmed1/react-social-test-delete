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
const Login = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>login title</title>
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta property="og:title" content="login Image title" />
        <meta property="og:description" content="Login Image description" />
      </Helmet>
      Login
      <FacebookShareButton
        url={"https://react-social-test-delete-2mdp.vercel.app/"}
      >
        <FacebookIcon size={32} round={true} style={{ color: "black" }} />
      </FacebookShareButton>
    </div>
  );
};

export default Login;
