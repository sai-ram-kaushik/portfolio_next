import TransitionEffect from "@/components/TransitionEffect";
import { socials } from "@/constants";
import banner from "@/public/assets/banner.svg";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="w-full lg:h-[80vh]  p-5">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full h-full">
          <div className="flex flex-col items-start gap-2 lg:gap-5 lg:w-[800px]">
            <h2>
              Hello I&apos;m <span className="font-bold">Sairam.</span>
            </h2>
            <h2>
              Front-end <span className="font-bold">Developer</span>
            </h2>
            <p className="text-justify">
              I&apos;m Sairam Kaushik, a final-year Computer Science student
              specializing in digital forensics and cybersecurity. Proficient in
              MERN stack frontend development, I co-lead{" "}
              <b>THE FRONTEND CLUB</b> and excel in design tools like Figma and
              Photoshop. Leading <b>HACK THE MOUNTAINS 3.0</b> design team and
              Google Developer Student Clubs honed my leadership, while
              networking with industry professionals fuels my constant
              improvement.
            </p>

            <div className="flex items-center gap-5">
              {socials.map((list, index) => (
                <div key={index}>
                  <a href={list.link} target="_blank">
                    <div className="p-[16px] border border-primary-black rounded-lg hover:bg-primary-black cursor-pointer hover:text-primary-white duration-200 text-2xl">
                      {list.icon}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
