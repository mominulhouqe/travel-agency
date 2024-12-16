"use client";
import logo from "@/assets/imgpsh_fullsize_anim 1.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#F4F4F433] backdrop-blur-lg fixed w-full z-30 opacity-95 top-4 rounded-xl max-w-[1170px] px-[15px]  mx-auto  h-[96px] shadow-lg left-1/2 transform -translate-x-1/2">
      <ul className="flex items-center justify-between py-4">
        {/* Logo */}
        <li>
          <a href="#" aria-label="Home" className="flex items-center space-x-2">
            <Image src={logo} width={108} height={80} alt="logo" />
          </a>
        </li>

        {/* Login Button */}
        <li>
          <a
            href="#"
            aria-label="Login"
            className="text-sm font-medium text-blue-600 bg-white rounded-lg py-2 px-6 hover:bg-blue-500 hover:text-white shadow-md transition duration-300"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
