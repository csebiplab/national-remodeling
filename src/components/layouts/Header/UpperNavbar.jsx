import Image from "next/image";

const UpperNavbar = () => {
  return (
    // <nav className="px-5 md:px-10 xl:px-20 2xl:px-[120px] py-5 bg__uppernav">
    <nav className="container py-2 bg__uppernav hidden md:block">
      <div className="flex justify-end gap-x-8">
        <div className="flex items-center gap-x-1">
          <Image
            src="/assets/images/message.png"
            width={23}
            height={23}
            alt="canada leaf"
            className="w-[23px] h-[23px]"
          />
          <h5 className="text-[14px] text-secondary-50">
          Best Construction Services Company
          </h5>
        </div>

        <div className="flex items-center gap-x-1">
          <Image
            src="/assets/images/email.png"
            width={23}
            height={23}
            alt="canada leaf"
            className="w-[23px] h-[23px]"
          />
          <h5 className="text-[14px] text-secondary-50">
            informational@yahoo.com
          </h5>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-secondary-50 text-[14px]">Follow Us:</h3>
          <div className="flex items-center gap-x-4 md:gap-x-6 xl:gap-x-9">
          <Image
            src="/assets/socials/facebook.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="facebook"
          />
          <Image
            src="/assets/socials/x.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="x"
          />
          <Image
            src="/assets/socials/insta.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="instagram"
          />
          <Image
            src="/assets/socials/in.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="linkedin"
          />
          <Image
            src="/assets/socials/google.png"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            alt="google"
          />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
