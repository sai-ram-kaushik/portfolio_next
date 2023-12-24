import meetos from "@/public/assets/meetos.png";
import clinic from "@/public/assets/srlclinic.png";
import aiccit from "@/public/assets/aiccit.png";
import Image from "next/image";
const Projects = () => {
  return (
    <div id="projects" className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            My <span className="font-bold">Projects</span>
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-16 mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <div>
              <Image
                src={meetos}
                width={500}
                height={500}
                alt="meetos"
                className="rounded-2xl border border-primary-black"
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <h3 className="font-bold">01</h3>
              <h3 className="font-bold">MeetOs</h3>
              <p className="text-justify lg:w-[30rem]">
                Tech stacks NextJS, NextAuth, JavaScript, Tailwind CSS and Verce
                A web platform fostering connections by utili ing Bluetooth to
                securely access users social media profiles with their consen
                Meetos innovatively bridges the gap between physical and digital
                networking, ensuring privacy through user-controlled permissions
                while enabling convenient social media integration
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-bold">02</h3>
              <h3 className="font-bold">SRL Multispeciality Clinic</h3>
              <p className="text-justify lg:w-[30rem]">
                Tech stacks NextJS, JavaScript, Tailwind CSS and Vercel
                Developing the website from scratch ensuring a responsive design
                and optimal user experience. Integrated a seamless appointment
                booking system directly into the website, allowing patients to
                conveniently schedule appointments with doctors online.
              </p>
            </div>

            <div>
              <Image
                src={clinic}
                width={500}
                height={500}
                alt="meetos"
                className="rounded-2xl border border-primary-black"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <div>
              <Image
                src={aiccit}
                width={500}
                height={500}
                alt="meetos"
                className="rounded-2xl border border-primary-black"
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <h3 className="font-bold">03</h3>
              <h3 className="font-bold">AICCIT - 2023</h3>
              <p className="text-justify lg:w-[30rem]">
                Tech stacks NextJS, NextAuth, JavaScript, Tailwind CSS and
                Vercel A website for International Conference which will
                integrated in our college website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
