import CommonButton from "@/components/ui/CommonButton";
import Image from "next/image";

const ServiceCard = ({ serv }) => {
  const { imgUrl, title, desc } = serv ?? {};

  return (
    <div className="service__card">
      <div className="text-center">
        <Image
          src={imgUrl}
          width={430}
          height={280}
          alt="easy pools"
          className="W-full h-[240px]"
        />
        <div className="px-[6px]">
          <h5 className="py-3 text-left md:py-[15px] 2xl:text-[24px] lg:text-xl text-sm leading-normal">
            {title}
          </h5>
          <p className="text-lg text-left font-normal leading-normal">{desc}</p>
          <div className="pb-5 mt-5 flex justify-center items-b relative">
            <CommonButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
