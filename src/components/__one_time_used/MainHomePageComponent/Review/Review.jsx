"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { SwipButton } from "../BenefitsWithEasyPools/SwipButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 55,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

/*
""
""
""
""
""
""
""
""
""

*/

const reviews = [
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  }
  
  
];

const Review = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="  container 3xl:py-[50px] py-[30px]">
        <div>
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.reviews__IconTxt} />

            <div>
              <p className="text-lg md:text-3xl lg:text-4xl text-dark md:text-start text-center md:mb-20 mb-8 text ">
              Reviews Of <span className="text-primary">General Contractors</span>
              </p>
            </div>
          </div>
        </div>

        <div className="!px-10 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={4000}
            allowTouchMove={false}
            breakpoints={breakpoints}
          >
            {reviews.map((test, i) => (
              <SwiperSlide key={i}>
                <div className=" bg-[#fff] rounded-lg shadow-md p-[20px] ">
                  <div>
                    <Image
                      src="/assets/images/google.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="lg:pt-2">
                    <Image
                      src="/assets/images/review.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-800 py-3 3xl:text-[14px] ">
                    {test.text}
                  </p>
                  <h6 className="font-semibold text-gray-900 ">
                    {test.author}
                  </h6>
                  <p className="text-gray-600 text-xs ">{test.location}</p>
                </div>
              </SwiperSlide>
            ))}

            <div>
              <SwipButton />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
