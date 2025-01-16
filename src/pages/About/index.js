import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";
import dp from "../../assets/dp.jpg";
import TypingEffect from "../../Utils/TypingEffect";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src={dp}
              alt="Kamran Ahmad"
              className="p-12 mt-5 rounded-full object-cover transform translate-y-[-12%]"
              title="Kamran Ahmad"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Kamran Ahmad
            </h1>
            <div className="my-8">
              <TypingEffect
                texts={[
                  "A Mern-stack Developer",
                  "A Full-stack Developer",
                  "An Android Developer",
                ]}
                speed={120}
                pause={3000} 
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%] sm:text-2xl sm:mb-2 md:text-left"
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              As a Web-App developer, I am committed to building high-quality
              web applications that meet the needs of my clients. I specialize
              in using React.js, TypeScript, Express.js, Node.js, and React
              Native to create scalable, robust web and mobile applications.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Kamran Ahmad
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+62 823 6148
                4992
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                kamrananwar2004@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>
                Faisalabad, Pakistan
              </h2>
              <a href="" target="blank">
                <div className="flex justify-center md:justify-start translate-y-[60%] mt-3 sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
