import { experience } from "@/constants";
import Image from "next/image";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full p-5 mt-10 bg-primary-black text-primary-white rounded-3xl">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            My <span className="font-bold text-primary-white">Experience</span>
          </h3>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-16 mt-10">
          {experience.map((list, index) => (
            <div
              key={index}
              className="lg:max-w-[30rem] lg:max-h-[20rem] border border-primary-white hover:bg-primary-white hover:text-primary-black cursor-pointer duration-300 hover:border-primary-black rounded-xl p-5">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={list.logo}
                    alt={list.company}
                    width={50}
                    height={50}
                  />
                  <p className="text-xl lg:text-2xl font-bold">
                    {list.label}
                  </p>
                </div>

                <p className="font-bold">{list.date}</p>
                <p className="text-justify">{list.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
