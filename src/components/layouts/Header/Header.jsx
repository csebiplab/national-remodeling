import Image from "next/image";
import UpperNavbar from "./UpperNavbar";
import "./Header.css";
import Link from "next/link";
import { UtilsModule } from "@/utils/nav-menus";
import WebBrandSvg from "../../ui/WebBrandSvg";
import logo from "../../../../public/assets/logo/Logo.png"

const Header = () => {
  return (
    <header className="custom-container">
      {/* Social small nav */}
      <UpperNavbar />

      {/* Main navbar */}
      {/* <nav className="px-5 md:px-10 xl:px-20 2xl:px-[120px] py-2 main__header"> */}
      <nav className="container py-1 main__header">
        <div className="flex items-center justify-between">
          <Link href="/">
            {/* <WebBrandSvg /> */}
            <Image src={logo} width={200} height={200} alt="logo"/>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-3">
              {UtilsModule.navMenus.map(
                ({ mainMenu, url, subMenu, svg = null }, index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      className={`${
                        svg ? "flex items-center gap-x-1" : ""
                      } !text-lg text-black font-normal`}
                    >
                      {mainMenu} {svg}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/phone-call.png"
                width={28}
                height={28}
                alt="canada leaf"
                className="w-[28px] h-[28px]"
              />
              <a
                href="tel:+1(647) 449 9512"
                className="text-secondary font-bold xs:text-base sm:text-xl md:text-lg lg:text-[20px] "
              >
                +1(647) 449 9512
              </a>
            </div>
            <div className="block lg:hidden">
              <Image
                src="/assets/icons/menu.png"
                width={22}
                height={22}
                alt="Menu"
                className="w-[22px] h-[22px]"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
