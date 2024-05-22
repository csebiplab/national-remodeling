import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "../OurServiceAreas/OurServiceAreas.css";

const OurServiceAreas = () => {
  return (
    <div className=" bg__color">
      <div className=" container">
        <div className="mx-auto flex flex-col items-center justify-center pt-10">
          <HeadingIcon text={headingIconText.map__IconTxt} />

          <h3 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
            Our Service Areas From{" "}
            <span className="text-primary">General Contractor</span>
          </h3>
        </div>
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/map1.png"
                width={640}
                height={445}
                alt="about us image"
                className=""
              />
              <button className="w-full bg-primary px-[34px] py-[10px] flex justify-center items-center rounded-md">
                <span className="text-white text-lg font-medium">Toronto</span>
              </button>
            </div>
          </div>
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/map2.png"
                width={640}
                height={445}
                alt="about us image"
                className=""
              />
              <button className="w-full bg-primary px-[34px] py-[10px] flex justify-center items-center rounded-md">
                <span className="text-white text-lg font-medium">Durham</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceAreas;
