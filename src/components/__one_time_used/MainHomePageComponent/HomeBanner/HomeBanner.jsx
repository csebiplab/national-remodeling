"use client";
import HeadingOne from "@/components/HeadingOne/HeadingOne";
import "./HomeBanner.css";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div>
      {/* large device  */}

      <div className="">
        <div className="full__section_l_p pr-3 md:pr-0 banner__section">
          <div className="banner-content grid grid-cols-1 md:grid-cols-8 items-center gap-10 pt-[20px] md:py-[60px] lg:py-[80px] xl:py-[110px] 2xl:pt-[140px] 3xl:pt-[160px] 4xl:pt-[175px] 5xl:py-[192px]">
            <div className="md:col-span-4 flex items-center">
              <div className="px-6">
                <h1 className=" text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-left leading-tight">
                  General Contractors in Toronto Ontario
                </h1>
                <p className="text-lg lg:text-[20px] font-medium text-left leading-[30px] lg:leading-[40px] pt-2">
                  The general contractors in Toronto of National Remodelling &
                  General Contracting Inc. offer top-notch #1 remodeling and
                  construction services.
                </p>
                <div className="flex justify-start py-6">
                  <a href={`tel:(416) 996-2409`}>
                    <button
                      type="submit"
                      className="flex justify-center items-center w-[170px] large__Device__Btn p-3  font-semibold "
                    >
                      <span className="mr-2 text-white text-lg font-medium">
                        Get Estimated{" "}
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className=" -mt-[600px] block md:hidden small__banner__section w-auto h-[827px]" />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
