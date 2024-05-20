import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const TrustUs = () => {
  return (
    <div>
      <div className="bg-[#FFF9EE]">
        <div className=" container">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
            <div className="relative z-50 md:col-span-3 flex justify-center items-center ">
              <div className="">
                <Image
                  src="/assets/images/TrustUs.png"
                  width={620}
                  height={510}
                  alt="Our Experience image"
                  className=""
                />
              </div>
              <div className="w-[280px] h-[245px] bg-primary rounded-md absolute bottom-4 right-2 -z-50"></div>
              <div className="w-[280px] h-[245px] bg-black rounded-md absolute top-4 left-2 -z-50"></div>
            </div>

            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.trustUs__IconTxt} />
              </div>
              <p className="mt-4 lg:mb-[25px] mb-[15px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center">
              Trusted General Contractors{" "}
                <span className="text-primary">in Toronto</span>
              </p>
              <p className="text-[18px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              Embark on your dream renovation journey with National Remodelling & General Contracting Inc., your trusted general contractor in Toronto. With a sterling reputation built on integrity, quality, and professionalism, we excel in bringing your renovation dreams to life. From residential to commercial projects, our experienced team delivers exceptional craftsmanship and attention to detail. Whether it's a kitchen remodel, bathroom renovation, or entire home makeover, we prioritize customer satisfaction every step of the way. With transparent communication and a commitment to deadlines, we ensure a stress-free experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
