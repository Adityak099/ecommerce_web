"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Search } from "lucide-react";
import { Gabriela } from "next/font/google";
import dispatch from "store/dispatch";
import { logoutAsync } from "store/slice/userSlice";
import Image from "next/image";

const gabreila = Gabriela({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  function SearchBar() {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <Search size={20} color="#000000" />
      </div>
    );
  }
  return (
    <>
      <header className="bg-green-500 text-white ">
        <div className="container mx-auto p-4 flex items-center justify-between md:justify-start">
          <Link
            href="/"
            // className={`text-2xl font-bold md:text-3xl `}
            className={`${gabreila.className} font-semibold text-2xl`}
          >
            ApnaBazar
          </Link>
          <nav className="hidden md:flex space-x-4 font-bold pl-16">
            <nav className="hidden md:flex space-x-4 font-bold">
              <Link href="/" className="hover:text-green-200 ">
                Home
              </Link>
              <Link href="/products" className="hover:text-green-200">
                Products
              </Link>
              <Link href="#" className="hover:text-green-200">
                Support
              </Link>
            </nav>
          </nav>
          <div className="relative lg:flex items-center md:ml-auto  hidden ">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 w-64 md:w-96"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-200"
              size={20}
            />
          </div>
          <div className="flex items-center space-x-4 md:ml-auto">
            <div className="flex  items-center space-x-4">
              {user !== null ? (
                <>
                  <button
                    onClick={() => {
                      dispatch(logoutAsync());
                      window.location.href = "/";
                    }}
                    className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-100 hidden lg:flex"
                  >
                    Sign Out
                  </button>
                  <div className="">
                    <Image
                      src={user.avatar}
                      width={30}
                      height={30}
                      className="rounded-full h-10 w-10 hidden lg:flex"
                      alt="User Avatar"
                    />
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    window.location.href = "/auth/login";
                  }}
                  className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-100"
                >
                  Sign In
                </button>
              )}
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
