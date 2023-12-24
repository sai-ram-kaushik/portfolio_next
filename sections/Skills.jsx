import { skills } from "@/constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            My <span className="font-bold">Skills</span>
          </h3>
        </div>

        <div className="mt-10 flex items-center flex-wrap justify-center gap-16">
          {skills.map((list, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[12rem] min-h-[12rem] border border-primary-black text-primary-black rounded-lg hover:bg-primary-black hover:text-primary-white cursor-pointer gap-3 duration-300 ease-in-out">
              <div className="text-6xl">{list.icon}</div>
              <div className="text-lg font-bold">{list.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
