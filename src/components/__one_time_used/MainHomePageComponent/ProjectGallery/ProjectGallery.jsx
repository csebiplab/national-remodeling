"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

const ProjectGallery = () => {
  const galImgs = [
    "/assets/gallery/Gallery_1.png",
    "/assets/gallery/Gallery_2.png",
    "/assets/gallery/Gallery_3.png",
    "/assets/gallery/Gallery_4.png",
    "/assets/gallery/Gallery_5.png",
    "/assets/gallery/Gallery_6.png",
    "/assets/gallery/Gallery_7.png",
    "/assets/gallery/Gallery_8.png",
    "/assets/gallery/Gallery_9.png",
    "/assets/gallery/Gallery_10.png",
    "/assets/gallery/Gallery_11.png",
    "/assets/gallery/Gallery_12.png",
  ];

  const galImgs2 = [
    "/assets/gallery/Gallery_1.png",
    "/assets/gallery/Gallery_2.png",
    "/assets/gallery/Gallery_3.png",
    "/assets/gallery/Gallery_4.png",
    "/assets/gallery/Gallery_5.png",
    "/assets/gallery/Gallery_6.png",
    "/assets/gallery/Gallery_7.png",
    "/assets/gallery/Gallery_8.png",
    "/assets/gallery/Gallery_9.png",
    "/assets/gallery/Gallery_10.png",
    "/assets/gallery/Gallery_11.png",
    "/assets/gallery/Gallery_12.png",
  ];

  return (
    <div className="bg-[#FFF9EE]">
      <div className="custom-container common__padding__top">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.gallery__IconTxt} />

            <div>
              <p className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
                Gallery of{" "}
                <span className="text-primary">Our Past Projects</span>
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="sample-slider w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            reverseDirection: true,
            stopOnLastSlide: false,
          }}
          // slidesPerView={5}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}

          // ,
          //   360: {
          //     slidesPerView: 4,
          //     spaceBetween: 20,
          //   },
          //   750: {
          //     slidesPerView: 4,
          //     spaceBetween: 40,
          //   },
          //   950: {
          //     slidesPerView: 4,
          //     spaceBetween: 50,
          //   },
        >
          {galImgs.map((imgUrl, idx) => (
            <SwiperSlide key={idx} className="m-2">
              <Image
                width={360}
                height={280}
                src={imgUrl}
                alt="gallery"
                className="object-contain w-full h-auto mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="sample-slider w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
          }}
          // slidesPerView={5}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          // ,
          //   360: {
          //     slidesPerView: 4,
          //     spaceBetween: 20,
          //   },
          //   750: {
          //     slidesPerView: 4,
          //     spaceBetween: 40,
          //   },
          //   950: {
          //     slidesPerView: 4,
          //     spaceBetween: 50,
          //   },
        >
          {galImgs2.map((imgUrl, i) => (
            <SwiperSlide key={i} className="m-2 ">
              <Image
                width={360}
                height={280}
                src={imgUrl}
                alt="gallery"
                className="object-contain w-full h-auto mx-auto "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectGallery;
