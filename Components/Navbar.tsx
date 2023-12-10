import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Hey</li>
          <li>
            <Link href="/sign-in">Sign in</Link>
            <UserButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
