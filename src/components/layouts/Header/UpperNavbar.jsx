import Image from "next/image";
import Link from "next/link";

const UpperNavbar = () => {
  return (
    <nav className=" hidden lg:block ">
      <div className="flex justify-between xl:gap-5 2xl:gap-6 3xl:gap-x-7 4xl:gap-x-8 5xl:gap-x-[35px]">
        <div className="w-full flex items-center gap-x-4 xl:gap-x-5 2xl:gap-x-6 3xl:gap-x-7 4xl:gap-x-8 5xl:gap-x-9">
          <div className="flex items-center gap-x-1">
            <Image
              src="/assets/icons/canada.jpg"
              width={23}
              height={23}
              alt="message icon"
              className="w-[15px] 2xl:w-[17px] 3xl:w-[19px] 4xl:w-[21px] 5xl:w-[23px] h-auto 5xl:h-[23px]"
            />
            <h5 className="text-sm font-medium text-black">
              General Contractors in Toronto
            </h5>
          </div>

          <div className="flex items-center gap-x-1">
            <Image
              src="/assets/images/email.png"
              width={23}
              height={23}
              alt="email icon"
              className="w-[15px] 2xl:w-[17px] 3xl:w-[19px] 4xl:w-[21px] 5xl:w-[23px] h-auto 5xl:h-[23px]"
            />

            <a href="mailto:informational@yahoo.com">
              <p className="text-sm font-medium text-black">
                informational@yahoo.com{" "}
              </p>
            </a>
          </div>
        </div>

        <div className="w-2/5">
          <div className="flex justify-end items-center gap-1 4xl:gap-1.5 5xl:gap-2">
            <h5 className="text-sm font-medium text-black">Follow Us:</h5>
            <div className="flex items-center gap-x-2 2xl:gap-x-3 3xl:gap-x-4 4xl:gap-x-5 5xl:gap-x-6">
              <Image
                src="/assets/socials/facebook.png"
                width={20}
                height={20}
                className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                alt="facebook"
              />
              <Image
                src="/assets/socials/x.png"
                width={20}
                height={20}
                className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                alt="x"
              />
              <Image
                src="/assets/socials/insta.png"
                width={20}
                height={20}
                className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                alt="instagram"
              />
              <Image
                src="/assets/socials/in.png"
                width={20}
                height={20}
                className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                alt="linkedin"
              />
              <Image
                src="/assets/socials/google.png"
                width={20}
                height={20}
                className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                alt="google"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
