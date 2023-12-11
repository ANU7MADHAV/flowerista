import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/public/logo1.png";
import logo1 from "@/public/Logo.png";
import Image from "next/image";

const Navbar = () => {
  const firstLinks = [
    { label: "ABOUT US", value: "/about" },
    { label: "SERVICES", value: "/services" },
    { label: "BLOG", value: "/blog" },
  ];
  const secondLinks = [
    { label: "GALLERY", value: "/gallery" },
    { label: "EMPLOYMENT", value: "/employment" },
    { label: "CONTACT", value: "/contact" },
  ];
  return (
    <div className="space-x-10 border-b-4 px-20 shadow-md">
      <nav className="flex justify-around space-x-4 py-4">
        <ul className="flex space-x-4">
          {firstLinks.map((link) => (
            <li key={link.label} className="cursor-auto hover:scale-105">
              <Link href={link.value}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link href={"/"}>
          <Image
            alt="logo"
            src={logo}
            className=" relative bottom-5 -mb-20 w-40 scale-50 object-cover dark:hidden"
          />
          <Image
            alt="logo"
            src={logo1}
            className=" relative bottom-5 -mb-20 hidden w-40 scale-50 object-cover dark:block"
          />
        </Link>

        <ul className="flex space-x-4">
          {secondLinks.map((links) => (
            <li key={links.label} className="cursor-pointer hover:scale-105">
              <Link href={links.value}>{links.label}</Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
        <UserButton />
      </nav>
    </div>
  );
};

export default Navbar;
