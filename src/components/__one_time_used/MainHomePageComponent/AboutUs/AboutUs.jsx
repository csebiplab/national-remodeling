import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FFF9EE] py-6 md:py-10">
        <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-[50px]">
        <div className="order-2 md:order-1">
          <div className="">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.AboutUs__IconTxt}
              />
            </div>
            <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4  text-2xl md:text-3xl lg:text-4xl text-dark leading-normal text-center md:text-start">
              <span className="text-primary">About Our </span>
              General Contractors in Toronto
            </h3>
            <p className="text-lg font-medium leading-[194%]">
            National Remodelling & General Contracting Inc. is one of the best remodeling & contracting companies in Toronto. We’ve been in business for the past 15 years serving the GTA and surrounding areas in both residential and commercial capacity. Our company is fully licensed and insured, with licensed plumbers, electricians, HVAC and gas, and mechanical guys on board our team. We can do legal basements, kitchen renovations, washrooms, stairs, hardwood floors, tiling, painting, fences and decks, carpentry, and many more designs to your dreams. We have a Whmis license, height, and fall, asbestos, and I’m fully insured. Please give us a call today at 416-996-2409. We look forward to hearing from you!
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-7 gap-x-4">
            <div className="col-span-4">
              <div>
                <div className="mb-6 w-full h-[132px] flex justify-center">
                  <Image
                    src="/assets/images/About_Us_1.png"
                    alt="About us"
                    width={350}
                    height={262}
                    className="h-auto w-full"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/About_Us_3.png"
                    alt="About us"
                    width={350}
                    height={333}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src="/assets/images/About_Us_2.png"
                alt="About us"
                width={295}
                height={515}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;