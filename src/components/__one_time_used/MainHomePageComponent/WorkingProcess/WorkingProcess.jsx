"use client";
import working1 from "../../../../../public/assets/images/working1.png";
import working2 from "../../../../../public/assets/images/working2.png";
import working3 from "../../../../../public/assets/images/working3.png";
import working4 from "../../../../../public/assets/images/working4.png";
import working5 from "../../../../../public/assets/images/working5.png";
import working6 from "../../../../../public/assets/images/working6.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./WorkingProcess.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const slideData = [
  {
    imgSrc: working1,
    title: "Initial Consultation",
    description: `We start by understanding the client's requirements, budget, and timeline during an initial consultation. This helps us grasp the project scope and objectives effectively.`,
  },
  {
    imgSrc: working2,
    title: "Project Planning",
    description: `After the consultation, our team conducts a thorough site assessment to evaluate the feasibility of the project. We collaborate with architects, engineers, and designers.`,
  },
  {
    imgSrc: working3,
    title: "Detailed Proposal",
    description: `Once the project plan is finalized, we provide the client with a detailed proposal outlining the scope of work, timeline, materials, and cost estimates. `,
  },
  {
    imgSrc: working4,
    title: "Permit Acquisition",
    description: `We handle all the necessary permits and approvals required for the project, ensuring compliance with local building codes and regulations.`,
  },
  {
    imgSrc: working5,
    title: "Execution",
    description: `With the plan in place and permits acquired, our experienced team of contractors begins the construction process. We prioritize efficiency, quality craftsmanship, and safety throughout every stage of the project.`,
  },
  {
    imgSrc: working6,
    title: "Regular Updates",
    description: `We maintain open communication with the client, providing regular updates on the progress of the project and addressing any concerns or modifications promptly.`,
  }
];

const WorkingProcess = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="py-6 lg:py-[55px]">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <HeadingIcon text={headingIconText.workingProcess__IconTxt} />
            </div>

            <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center">
            <span className="text-primary">Working Process</span> of Our Toronto General Contractors
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`text-center py-4 lg:py-10 px-20 md:px-14 lg:px-6`}
              >
                <div>
                  <Image
                    src={slide.imgSrc}
                    width={192}
                    height={192}
                    alt="working"
                    className="working p-10 mt-[10px] mx-auto"
                  />
                  <div className="text-center">
                    <h4 className="text-[25px] py-2">
                      {slide.title}
                    </h4>
                    <p className="text-lg mt-2 mb-3  text-black leading-[20px] md:leading-6">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
