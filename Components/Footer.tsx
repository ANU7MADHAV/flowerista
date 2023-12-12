import Image from "next/image";
import logo from "@/public/Logo.png";
import logo1 from "@/public/logo1.png";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { PiSpotifyLogo } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="flex items-center justify-between px-8">
        <div className="scale-50">
          <Image alt="logo" src={logo} className="hidden dark:block" />
          <Image alt="logo" src={logo1} className="dark:hidden" />
        </div>
        <div className="flex cursor-pointer space-x-8 ">
          <h2 className="hover:border-b-2">ABOUT US</h2>
          <h2 className="hover:border-b-2">EMPLOYMENT</h2>
          <h2 className="hover:border-b-2">PRIVACY POLICY </h2>
          <h2 className="hover:border-b-2">CONTACT</h2>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-600/75 px-8 ">
        <div className="flex">
          <CiFacebook />
          <FaInstagram />
          <CiLinkedin />
          <CiTwitter />
          <PiSpotifyLogo />
          <TfiYoutube />
        </div>
        <p>
          Copyright © 2023 Infinity Hospitality. Website design & management by
          Regard.
        </p>
      </div>
    </div>
  );
};

export default Footer;
