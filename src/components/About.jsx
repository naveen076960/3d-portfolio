import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // 1. REDUCED WIDTH: Changed xs:w-[250px] to xs:w-[180px]
  <Tilt className='xs:w-[180px] w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // 2. SMALLER CARD INTERNALS:
        // - Reduced padding (px-12 -> px-5)
        // - Reduced min-height (min-h-[280px] -> min-h-[200px])
        className='bg-tertiary rounded-[20px] py-4 px-5 min-h-[200px]  flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          // 3. SMALLER ICON: w-16 -> w-12
          className='w-12 h-12 object-contain'
        />

        {/* 4. SMALLER TEXT: text-[20px] -> text-[16px] */}
        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* 5. CENTER ALIGNMENT WRAPPER */}
      {/* Added a div to center the Header and Paragraph */}
      <div className="flex flex-col items-center">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          // 6. CENTERED TEXT: Added 'text-center'
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          I am a Software Engineering Undergraduate and an ICT Tutor with a passion 
          for both building systems and sharing knowledge. My technical expertise spans 
          across Java, SQL, and React, and I am currently exploring the world of 3D web 
          experiences with Three.js. Whether it's developing complex database solutions 
          or creating educational content for my YouTube channel, I am driven by a 
          desire to solve real-world problems and help others learn. I'm a quick learner 
          who thrives on new challenges—let's build something amazing together!
        </motion.p>
      </div>

      {/* 7. CENTERED CARDS: Added 'justify-center' to the flex container */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");