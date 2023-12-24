import banner from "@/public/assets/banner.svg";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="w-full lg:h-[80vh]  p-5">
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full h-full">
          <div className="flex flex-col items-start gap-2 lg:gap-5 lg:w-[800px]">
            <h2>
              Hello I&apos;am <span className="font-bold">Sairam.</span>
            </h2>
            <h2>
              Frontend <span className="font-bold">Developer</span>
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
