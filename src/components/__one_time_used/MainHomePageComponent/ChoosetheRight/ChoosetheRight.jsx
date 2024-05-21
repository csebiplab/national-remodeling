"use client";

import { headingIconText } from "@/utils/heading-text";
import React from "react";
import "./ChoosetheRight.css";

import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";

const usualPool = [
  {
    title: "Poor communication",
  },
  {
    title: "Lack of attention to detail",
  },
  {
    title: "Budget overruns",
  },
  {
    title: "Missed deadlines",
  },
  {
    title: "Low-quality workmanship",
  },
  {
    title: "Unreliable subcontractors",
  },
  {
    title: "Poor project management",
  },
  {
    title: "Lack of accountability",
  },
];
const easyPool = [
  {
    title: "High communication",
  },
  {
    title: "Skilled workforce",
  },
  {
    title: "Project management expertise",
  },
  {
    title: "Comprehensive service",
  },
  {
    title: "Quality assurance",
  },
  {
    title: "Regulatory compliance",
  },
  {
    title: "Flexibility and adaptability",
  },
  {
    title: "Customer satisfaction",
  },
];

const ChoosetheRight = () => {
  return (
    <div className="footer__bg">
      <div className="container">
        <div className="2xl:py-20 py-10 shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[50px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="flex md:justify-normal justify-center md:items-start items-center">
                <HeadingIcon text={headingIconText.chooseTheRight__IconTxt} />
              </div>

              <div>
                <p className="text-white 2xl:text-[36px] md:text-[20px] xs:text-[18px] md:pb-0 xs:pb-[20px] text-center ">
                  Choose the Right General Contractors{" "}
                  <span className="text-primary">in Toronto</span>
                </p>
              </div>

              <div>
                <p className=" md:block 2xl:text-[16px] text-[14px] text-center 3xl:py-[35px] py-[30px] text-white">
                  Choosing the right general contractor in Toronto, or anywhere,
                  is crucial for the success of your construction project. Every
                  renovation company is not the same or not good at work. You
                  have to choose the right one
                </p>
              </div>
            </div>

            <div className=" border-2 shadow bg-white">
              <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white 2xl:text-[18px] text-[16px]">
                Usual General Contractors
              </h2>
              <div className=" grid grid-flow-col grid-rows-8 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center 3xl:mb-[40px] lg:mb-[30px] xs:mb-[15px]  leading-none  "
                  >
                    <Image
                      src="/assets/images/x.png"
                      alt="x"
                      width={23}
                      height={23}
                      className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                    />
                    <p className="text-lg">{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" border-2 shadow bg-white">
              <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white 2xl:text-[18px] text-[16px]">
                Our General Contractors
              </h2>
              <div className=" grid grid-flow-col grid-rows-8 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px] ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center 3xl:mb-[40px] lg:mb-[30px]  xs:mb-[15px] leading-none "
                  >
                    <Image
                      src="/assets/images/r.png"
                      alt="r"
                      width={23}
                      height={23}
                      className="h-[15px] w-[15px] 2xl:h-[23px] 2xl:w-[23px]"
                    />
                    <p className="text-lg">{usual.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosetheRight;
