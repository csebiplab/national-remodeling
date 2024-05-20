import Image from "next/image";
import "../HomeBanner/HomeBanner.css";

const HomeBanner = () => {
  return (
    <div>
      <div className="banner__bg hidden md:block">
        <div className="full__section_l_p">
          <div className=" h-screen grid  grid-cols-1 md:grid-cols-8  items-center gap-10 2xl:py-[100px] lg:py-[70px] py-[50px]">
            <div className="md:col-span-4 flex items-center">
              <div className="">
                <p className="mt-4 lg:mb-[25px] mb-[15px] md:text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-5xl 3xl:text-[52px] 4xl:text-[56px] 5xl:text-6xl text-primary leading-normal md:text-start text-center">
                  General Contractors in Toronto Ontario
                </p>
                <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
                  The general contractors in Toronto of National Remodelling &
                  General Contracting Inc. offer top-notch #1 remodeling and
                  construction services.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center mt-0 lg:mt-10"
                  >
                    <span className="mr-2 text-white">Get Estimated</span>
                  </button>
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="">
          <p className="mt-4 lg:mb-[25px] mb-[15px] text-lg md:text-3xl lg:text-4xl text-primary leading-normal md:text-start text-center">
            General Contractors in Toronto Ontario
          </p>
          <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
            The general contractors in Toronto of National Remodelling & General
            Contracting Inc. offer top-notch #1 remodeling and construction
            services.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center mt-0 lg:mt-10"
            >
              <span className="mr-2 text-white">Get Estimated</span>
            </button>
          </div>
        </div>
        <div>
          <Image src="/assets/images/banner-image.png" alt="banner image" width={100} height={100} className="w-full h-full"/>
        </div>
      </div>
      
    </div>
  );
};

export default HomeBanner;
