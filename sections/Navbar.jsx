import { menuList } from "@/constants/index";
import { IoMdClose } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-20 sticky top-0 z-[999] bg-primary-white">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-4 lg:px-0">
          <Link href="/#">
            <h1>
              Sairam <span>Kaushik</span>
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {menuList.map((list, index) => (
              <ul key={index} className="text-lg font-medium">
                <Link href={list.path}>
                  <li>{list.label}</li>
                </Link>
              </ul>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/18sFu_sQ_bXOfsHwJkhmw4UjCqhwAKpi_/view?usp=drive_link"
            target="_blank">
            <div className="hidden lg:flex items-center gap-3 px-[18px] py-[14px] text-[20px] border border-primary-black bg-primary-black rounded-xl text-primary-white hover:text-primary-black hover:bg-primary-white duration-150 cursor-pointer">
              <button className="">Resume</button>
              <FaDownload size={30} />
            </div>
          </a>

          <div
            className="flex lg:hidden p-3 bg-primary-black text-primary-white rounded-full"
            onClick={handleChange}>
            {nav ? <IoMdClose size={20} /> : <TiThMenu size={20} />}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary-black text-primary-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
          }>
          <Link href="/#" onClick={handleChange}>
            <h1>
              Sairam <span className="text-primary-white">Kaushik</span>
            </h1>
          </Link>

          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {menuList.map((link, index) => (
              <ul
                key={index}
                className="text-xl text-background"
                onClick={handleChange}>
                <Link
                  href={link.path}
                  className="text-primary hover:text-secondary text-center duration-200">
                  <li>{link.label}</li>
                </Link>
              </ul>
            ))}

            <a
              href="https://drive.google.com/file/d/18sFu_sQ_bXOfsHwJkhmw4UjCqhwAKpi_/view?usp=drive_link"
              target="_blank">
              <div className="flex items-center gap-3 px-[18px] py-[14px] text-[20px] border border-primary-white bg-primary-white rounded-xl text-primary-black hover:text-primary-black hover:bg-primary-white duration-150 cursor-pointer">
                <button className="">Resume</button>
                <FaDownload size={30} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
