import Buttonlink from "@/component/Buttonlink";
import React from "react";

const hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#FFFFFF] to-[#D4E7FE] w-full">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/2">
            <div className="flex items-center mt-20 mb-7 ml-3 md:ml-28">
              <Buttonlink title="Netbook community" />
            </div>
            <h2
              className="text-6xl font-bold  text-center md:text-left text-[#0A093D] mb-8 ml-3 md:ml-28"
              data-aos="fade-right"
            >
              Your Solutions For Community!
            </h2>
            <h4
              className="text-2xl text-[#656464] mb-11 text-center md:text-left ml-3 md:ml-28"
              data-aos="fade-right"
            >
              More than 2 billion people in over countries use socibook to stay
              in touch with friends & family.
            </h4>

            <div className="grid grid-cols-2 mb-16 ml-28 gap-0">
              <Buttonlink title="About More" />
              <Buttonlink title="Invite Friend" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="mt-7 items-center"
              src="/Iamge.png"
              alt="hero"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
