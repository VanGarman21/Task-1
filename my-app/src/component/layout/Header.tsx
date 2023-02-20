import React from "react";
import Image from "next/image";

const navdata = [
  { href: "/", title: "Home" },
  { href: "/", title: "Community" },
  { href: "/", title: "Blog" },
  { href: "/", title: "Events" },
];
const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-[#2B2B39] mx-auto">
          <a href="/" className="flex items-center px-4">
            <Image src="/lg netbok.png" width={36} height={36} alt="logo" />
            <span className="font-semibold text-xl ">Netbook</span>
          </a>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {navdata.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block mt-4 px-4 lg:inline-block lg:mt-0 text-[#656464] hover:text-[#2B2B39]"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="relative pr-3">
            <form action="#" method="GET">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 py-2 border-l border-gray-300 bg-gray-50 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
              >
                <svg
                  className="w-5 h-5 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18.5C14.1421 18.5 17.5 15.1421 17.5 11C17.5 6.85786 14.1421 3.5 10 3.5C5.85786 3.5 2.5 6.85786 2.5 11C2.5 15.1421 5.85786 18.5 10 18.5Z"
                    stroke="#656464"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.5 21.5L15.75 15.75"
                    stroke="#656464"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded bg-[#217BF4] text-white border-white hover:text-white hover:bg-[#217BF470] mt-4 lg:mt-0"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
