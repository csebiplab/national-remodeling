"use client";

import { useWindowSize } from "@/hooks/useWindowsSize";

const HeadingOne = ({
  largestStyle = "text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-left leading-tight",
  smStyles = "pt-[30px] pl-[30px] text-4xl text-primary font-medium",
}) => {
  const { width } = useWindowSize();
  console.log(width)
  return (
    <h1 className={`${width>767 ? largestStyle : smStyles}`}>
      General Contractors in Toronto Ontario
    </h1>
  );
};

export default HeadingOne;
