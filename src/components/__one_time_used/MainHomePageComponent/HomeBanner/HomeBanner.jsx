"use client";
import HeadingOne from "@/components/HeadingOne/HeadingOne";
import "./HomeBanner.css";
import { Button } from "@material-tailwind/react";

const HomeBanner = () => {
  return (
    <div>
      {/* large device  */}

      <div className="">
        <div className="full__section_l_p banner__section">
          <div className="banner-content grid grid-cols-1 md:grid-cols-8 items-center gap-10 py-[40px] md:py-[60px] lg:py-[80px] xl:py-[110px] 2xl:pt-[140px] 3xl:pt-[160px] 4xl:pt-[175px] 5xl:py-[192px]">

            <div className="md:col-span-4 flex items-center">
              <div className="px-6">
                <h1 className=" text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-left leading-tight">
                  General Contractors in Toronto Ontario
                </h1>
                {/* <HeadingOne largestStyle={`text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-left leading-tight`}/> */}
                <p className="text-lg lg:text-[20px] font-medium text-left leading-[30px] lg:leading-[40px] pt-2">
                  The general contractors in Toronto of National Remodelling &
                  General Contracting Inc. offer top-notch #1 remodeling and
                  construction services.
                </p>
                <div className="flex justify-start py-6">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-[170px] large__Device__Btn p-3  font-semibold "
                  >
                    <span className="mr-2 text-white text-lg font-medium">
                      Get Estimated{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mt-[400px] block md:hidden small__banner__section w-auto h-[627px]"/>
            <div />
          </div>
        </div>
      </div>

      {/* small device  */}
      {/* <div className="block md:hidden">
        <div className="small__banner__section w-auto h-[627px]">
          <div className="small__banner__section__content">
            <HeadingOne smStyles={`pt-[30px] pl-[30px] text-4xl text-primary font-medium`}/>
            <p className="px-[40px] pt-[10px] text-lg text-black font-medium">
              Best commercial & residential The general contractors in Toronto
              of National Remodelling & General Contracting Inc. offer top-notch
              #1 remodeling and construction services.
            </p>
            <div className="w-full flex items-center justify-center md:justify-start pl-[30px] pt-[25px]">
              <Button className="small__device__btn gap-x-2">
                <span className="text-white text-xs font-bold">
                  Get Estimated
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeBanner;
