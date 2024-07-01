import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const CostBudgeting = () => {
  return (
    <div>
      <div className="bg-[#FFF9EE]">
        <div className="container">
          <div className="grid md:grid-cols-6 grid-cols-1 md:gap-10 lg:gap-20 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.costBudgeting__IconTxt} />
              </div>
              <h4 className="mt-4 lg:mb-[25px] mb-[15px] md:text-3xl lg:text-4xl text-primary leading-normal font-normal md:text-start text-center">
                Cost Estimation and Budgeting
                <span className="text-black">
                  {" "}
                  with Toronto's General Contractors
                </span>
              </h4>
              <p className="text-[18px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
                National Remodelling & General Contracting Inc. is your trusted
                partner for cost estimation and budgeting in Toronto. With years
                of experience in the industry, we specialize in providing
                accurate and transparent estimates tailored to your specific
                project needs. Our team of skilled professionals works closely
                with clients to understand their vision and financial
                parameters, ensuring a seamless and cost-effective process from
                start to finish. Whether it's residential renovations,
                commercial construction, or home/kitchen/bathroom remodeling, we
                prioritize quality craftsmanship and attention to detail while
                keeping your budget in mind. Count on our company to deliver
                exceptional results within your budgetary constraints, making
                your dream project a reality without breaking the bank.
              </p>
            </div>

            <div className="md:col-span-3 flex justify-center items-center pt-4 md:pt-0">
              <div className="">
                <Image
                  src="/assets/images/CostBudgeting.jpg"
                  width={620}
                  height={510}
                  alt="CostBudgeting image"
                  className="w-dvw md:h-[530px] lg:h-[570px] xl:h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostBudgeting;
