import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I am highly skilled computer engineering student with a
        strong academic foundation and practical expertise in web development.
        Specializing in TypeScript and JavaScript, he excels in renowned
        frameworks like React, Node.js, and Three.js. Nitesh's project portfolio
        reflects his ability to create efficient and user-friendly web
        applications, demonstrating proficiency across various technologies and
        frameworks. His dedication extends to real-world experiences gained
        through internships, where he has contributed to software testing and
        frontend web development. Nitesh's commitment to effective
        collaboration, continuous learning, and problem-solving ensures he
        delivers exceptional results, making him the ideal choice for innovative
        and impactful solutions in the realm of computer engineering and web
        development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
