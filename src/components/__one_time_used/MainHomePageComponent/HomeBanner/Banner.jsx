import "./Banner.css";

const Banner = () => {
  return (
    <div className="container home-banner py-20 min-h-screen flex justify-center items-center bg-blend-multiply bg-primary-700">
      <div className="text-center banner-content">
        <div>
          <h1 className="text-white text-[27px] lg:text-[55px] leading-normal">
          General Contractors in Toronto Ontario
          </h1>
          <p className="mt-4 lg:mt-8 lg:leading-10 leading-normal text-white lg:text-[25px] text-sm font-normal">
          The general contractors in Toronto of National Remodelling & General Contracting Inc. offer top-notch #1 remodeling and construction services.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center large__Device__Btn py-2 md:py-3 px-4 mt-5 md:mt-6">
              <span className="text-white text-xs md:text-lg">Get Estimated</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;