
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./GeneralContractors.css"

const GeneralContractors = () => {
  return (
    <div className="bg__color">
      <div className="full__section_l_p pr-3 md:pr-8 lg:pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-7  py-[50px] lg:py-[70px] 2xl:py-[100px]">
          <div className="md:col-span-3 ">
                <div className="flex md:justify-normal justify-center md:items-start items-center">
                    <HeadingIcon text={headingIconText.GeneralContractors__IconTxt}/>
                </div>
                <p className="text-black text-[28px] md:text-3xl lg:text-4xl text-center md:text-left font-normal md:font-medium leading-normal">The Leading General Contractors <span className="text-primary">in Toronto</span></p>
                <p className="text-lg leading-9">
                National Remodelling & General Contracting Inc. stands tall among Toronto's leading general contractors, renowned for our unwavering commitment to excellence. With a rich history spanning years, we have established ourselves as pioneers in the industry, delivering top-tier construction and renovation solutions to residential and commercial clients alike. From meticulous planning to flawless execution, every project undertaken by us reflects our dedication to quality and client satisfaction. Our team of skilled professionals combines innovative design with superior construction techniques to bring visions to life, transforming spaces into masterpieces. Whether it's a residential renovation, commercial build-out, or restoration project, our company sets the benchmark for reliability, integrity, and superior craftsmanship in Toronto's construction landscape.
                </p>
          </div>
          <div className="md:col-span-4 flex items-center justify-center lg:justify-end">
                <div>
                    <Image src="/assets/images/GeneralContractors.png" alt="GeneralContractors" width={430} height={323}
                    className="w-full lg:w-[550px] xl:w-[600px] 2xl:w-[700px] 3xl:w-[800px] 4xl:w-[860px] 5xl:w-[940px] h-[323px] md:h-auto"/>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContractors;
