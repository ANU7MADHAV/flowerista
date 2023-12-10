import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const links = [
    { label: "Home", value: "/" },
    { label: "Explore", value: "/explore" },
    { label: "About", value: "/about" },
  ];
  return (
    <div className="border-b-4 shadow-md">
      <nav className=" flex justify-between px-6 py-3">
        <ul className="flex space-x-5">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.value}>{link.label}</Link>
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
