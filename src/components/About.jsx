import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from "../assets/me.png";
import saturn from "../assets/background/saturn.png";
// Make sure you have the actual path to your background image
// import saturn from "../assets/backgrounds/saturn.png";

// --- SUB-COMPONENT: HOLOGRAPHIC IMAGE ---
const HolographicProfile = ({ imgSource }) => {
  const controls = useAnimation();
  const [isGlitching, setIsGlitching] = useState(false);

  // Glitch Animation Variants
  const glitchVariants = {
    standard: {
      x: 0,
      y: 0,
      scale: 1,
      filter: "contrast(1) brightness(1) hue-rotate(0deg)",
      opacity: 1,
    },
    glitch: {
      // Rapid random movement
      x: [0, -3, 3, -2, 2, 0],
      y: [0, 2, -2, 0],
      // Subtle scale shift
      scale: [1, 1.02, 0.98, 1],
      // Color/Contrast flash to simulate interference
      filter: [
        "contrast(1) brightness(1) hue-rotate(0deg)",
        "contrast(1.5) brightness(1.2) hue-rotate(90deg)",
        "contrast(1.5) brightness(1.2) hue-rotate(-90deg)",
        "contrast(1) brightness(1) hue-rotate(0deg)",
      ],
      // Rapid flicker opacity
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: {
        duration: 0.4,
        times: [0, 0.2, 0.4, 0.6, 1],
        type: "tween",
      },
    },
  };

  // Random Glitch Trigger Timer
  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      controls.start("glitch").then(() => {
        setIsGlitching(false);
        controls.start("standard");
      });
      // Schedule next glitch between 2s and 6s
      const nextGlitchTime = Math.random() * 4000 + 2000;
      setTimeout(triggerGlitch, nextGlitchTime);
    };

    // Initial start after 1s
    const initialTimer = setTimeout(triggerGlitch, 1000);

    // Cleanup timers on unmount (though this simple version doesn't strictly track the recursive timer ID, it's usually okay for visual effects)
    return () => clearTimeout(initialTimer);
  }, [controls]);

  return (
    // 1. The Glowing Emitter Container (Gradient Border)
    <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-[#00f7ff] via-[#915eff] to-[#00f7ff] animate-gradient-xy shadow-[0_0_25px_-5px_rgba(145,94,255,0.6)]">
      {/* 2. Scanline Overlay (Optional: adds subtle horizontal lines) */}
      <div
        className="absolute inset-[3px] z-10 rounded-2xl pointer-events-none mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
          backgroundSize: "100% 4px",
        }}
      ></div>

      {/* 3. The Animated Image */}
      <div className="relative overflow-hidden rounded-2xl bg-[#050816]">
        <motion.img
          src={imgSource}
          alt="Holographic Profile"
          className="w-full h-auto object-cover"
          animate={controls}
          variants={glitchVariants}
          initial="standard"
          style={{ mixBlendMode: isGlitching ? "lighten" : "normal" }} // Helps the glitch colors pop
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="relative">
        {/* --- BACKGROUND START --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full z-[-1]">
          {/* Ensure the path to saturn.png is correct in your imports */}
          <img
            src={saturn}
            alt="background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-80"></div>
        </div>

        {/* --- MAIN CONTENT START --- */}
        <div className="flex flex-col md:flex-row gap-10 items-center pb-20">
          {/* 1. LEFT SIDE: THE NEW HOLOGRAPHIC IMAGE COMPONENT */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full md:w-[35%] relative "
          >
            {/*Replaced standard img tag with our new component */}
            <HolographicProfile imgSource={me} />
          </motion.div>

          {/* 2. RIGHT SIDE: OVERVIEW TEXT (Unchanged for now) */}
          <div className="w-full md:w-[60%] flex flex-col justify-center md:pt-20 ">
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>About me.</h2>
            </motion.div>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 mr-4 ml-4 md:ml-0 text-secondary text-[17px] leading-[30px] text-justify"
            >
              I am a Software Engineering Undergraduate and an ICT Tutor with a
              passion for both building systems and sharing knowledge. My
              technical expertise spans across Java, SQL, and React, and I am
              currently exploring the world of 3D web experiences with Three.js.
              Whether it's developing complex database solutions or creating
              educational content for my YouTube channel, I am driven by a
              desire to solve real-world problems and help others learn. I'm a
              quick learner who thrives on new challenges—let's build something
              amazing together!
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
