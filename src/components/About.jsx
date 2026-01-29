import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from '../assets/me.png';
import saturn from '../assets/background/saturn.png';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[250px] h-[200px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // Added overflow-hidden to ensure the image doesn't bleed outside the border
      className='w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card overflow-hidden'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

        className='bg-tertiary h-full relative rounded-[20px] overflow-hidden'
      >
        <img
          src={icon}
          alt={title}
          className='w-full h-full object-cover'
        />

        
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#151030] to-transparent flex items-end justify-center p-2">
            <h3 className='text-white text-[14px] font-bold text-center break-words drop-shadow-md'>
            {title}
            </h3>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="relative">

      {/* --- CREATIVE BACKGROUND START --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full z-[-1]">
    
        <img 
            src={saturn}//"../assets/backgrounds/saturn.png" 
            alt="background" 
            className="w-full h-full object-cover opacity-25" 
            
        />
        {/* Optional: Add a gradient overlay so it blends into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-80"></div>
      </div>
     
      {/* --- TOP SECTION: IMAGE (LEFT) + TEXT (RIGHT) --- */}
      <div className="flex flex-col md:flex-row gap-10 items-center ">
        
        
        {/* 1. LEFT SIDE: PORTRAIT IMAGE */}
        <motion.div 
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-[35%] relative "
        >
         
          <img 
            src={me}
            // src="../assets/me.png" 
            alt="Naveen"
            className="w-full h-auto object-cover rounded-2xl shadow-lg " 
          />
        </motion.div>

        {/* 2. RIGHT SIDE: OVERVIEW TEXT */}
        <div className="w-full md:w-[60%] flex flex-col justify-center  md:pt-20 ">
          <motion.div variants={textVariant()}>
            
            <h2 className={styles.sectionHeadText}>About me...</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 mr-4 ml-4 md:ml-0 text-secondary text-[17px] leading-[30px] text-justify'
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
      </div>

      {/* 7. CENTERED CARDS: Added 'justify-center' to the flex container */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");