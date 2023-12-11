import Image from "next/image";
import logo from "@/public/Logo.png";
import logo1 from "@/public/logo1.png";

const LogoSection = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image src={logo} alt="logo-image" className="hidden dark:block" />
      <Image src={logo1} alt="logo-image" className=" dark:hidden" />
    </div>
  );
};

export default LogoSection;
