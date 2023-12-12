"use client";
import logo1 from "@/public/Logo.png";
import logo from "@/public/logo1.png";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaBars } from "react-icons/fa6";
import { link } from "fs";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);
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
    <>
      <div className="hidden w-screen space-x-10 border-b-4 px-20 shadow-md lg:block">
        <nav className=" flex justify-around space-x-4 py-4">
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
        </nav>
      </div>
      {/* Mobile Navbar */}
      <div onClick={() => setState(!state)} className="py-8 pl-8 md:hidden">
        <FaBars />
      </div>
      {!state && (
        <div className="relative bottom-[80px] left-4 -mb-[40px] h-0 scale-50 md:hidden">
          <Image alt="logo" src={logo} className="scale-75 dark:hidden" />
          <Image
            alt="logo"
            src={logo1}
            className="hidden scale-75 dark:block"
          />
        </div>
      )}
      {state && (
        <div className=" h-screen w-screen md:hidden">
          <div className="w-screen bg-black text-white dark:bg-white dark:text-black">
            <nav className="flex h-screen w-screen">
              <ul className="relative left-[200px] flex w-screen flex-col justify-center gap-y-8">
                {firstLinks.map((link) => (
                  <li key={link.label} className="w-screen">
                    <Link href={link.value}>{link.label}</Link>
                  </li>
                ))}
                {secondLinks.map((links) => (
                  <li key={links.value} className="w-screen">
                    <Link href={links.value}>{links.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
