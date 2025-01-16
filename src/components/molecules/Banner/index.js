import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
import TypingEffect from "../../../Utils/TypingEffect";
import cv from "../../../assets/CV.pdf";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
          Hello, I'm
        </h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">
          Kamran Ahmad
        </h1>
        <div className="my-4">
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
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
          As a Web-App developer, I am committed to building high-quality web
          applications that meet the needs of my clients. I specialize in using
          React.js, TypeScript, Express.js, Node.js, and React Native to create
          scalable, robust web and mobile applications.
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <a href={cv} download="Kamran Ahmad CV" target="blank">
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Banner;
