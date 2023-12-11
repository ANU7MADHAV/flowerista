import Image from "next/image";
import logo from "@/public/Logo.png";
import logo1 from "@/public/logo1.png";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="flex items-center justify-between px-8">
        <div className="scale-50">
          <Image alt="logo" src={logo} className="hidden dark:block" />
          <Image alt="logo" src={logo1} className="dark:hidden" />
        </div>
        <div className="flex  space-x-8">
          <h2>ABOUT US</h2>
          <h2>EMPLOYMENT</h2>
          <h2>PRIVACY POLICY </h2>
          <h2>CONTACT</h2>
        </div>
      </div>
      <div className="bg-gray-700">hello</div>
    </div>
  );
};

export default Footer;
