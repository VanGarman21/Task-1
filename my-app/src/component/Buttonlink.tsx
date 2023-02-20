import { title } from "process";
import React from "react";

type ButtonLinkType = {
  title: string;
};
const Buttonlink = ({ title }: ButtonLinkType) => {
  return (
    <button>
      <a
        href="https://www.google.com"
        className="text-sm px-11 py-6 leading-none bg-[#F1F6FD] hover:bg-[#217BF4] border-[#217BF4] hover:text-white mt-0 rounded-2xl"
      >
        {title}
      </a>
    </button>
  );
};

export default Buttonlink;
