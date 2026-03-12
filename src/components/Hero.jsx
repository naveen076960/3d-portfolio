import { motion } from "framer-motion";
import { styles } from "../styles";
import { MyCustomModelCanvas } from "./canvas";
import { Canvas } from "@react-three/fiber";
import { ComputersCanvas } from "./canvas";

import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  GradientTexture,
  Stars,
} from "@react-three/drei";

const Hero = () => {
  return (
    // Changed to pure black background to make the neon pop
    <section
      className={`relative w-full h-screen mx-auto overflow-hidden bg-black`}
    >
      {/* Custom Model */}
      <div className="absolute inset-0 z-10 w-full lg:w-1/2 lg:left-[43%]">
        <MyCustomModelCanvas />
      </div>

      {/* === TEXT & GRAPHICS OVERLAY === */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20 pointer-events-none`}
      >
        {/* Cyberpunk Data Stream (Vertical Line) */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Changed rounded dots to sharp squares, updated to pure cyan, and added a glowing pulse */}
          <div className="w-2 h-2 bg-[#00f7ff] mb-2 shadow-[0_0_10px_#00f7ff] animate-pulse" />
          <div className="w-1.5 h-1.5 bg-[#00f7ff] mb-2 opacity-80 shadow-[0_0_8px_#00f7ff]" />
          <div className="w-1 h-1 bg-[#00f7ff] mb-2 opacity-50" />
          {/* Updated gradient hex codes */}
          <div className="w-[2px] sm:h-64 h-32 bg-gradient-to-b from-[#00f7ff] via-[#915EFF] to-transparent" />
        </div>

        {/* Terminal Typography */}
        <div>
          <p className="font-mono text-[#00f7ff] text-sm md:text-base mb-2 tracking-widest opacity-80"></p>
          <h1
            className={`${styles.heroHeadText} text-white uppercase font-black tracking-tight drop-shadow-lg`}
          >
            IM_ <br className="sm:block hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#915EFF] drop-shadow-[0_0_15px_rgba(0,247,255,0.4)]">
              Naveen
            </span>
            <span className="animate-pulse text-[#00f7ff]">_</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-gray-400 font-mono text-[14px] md:text-[18px]`}
          >
            &gt; This is my 3D web portfolio <br className="sm:block hidden" />
            <span className="text-[#915eff] text-[12px] md:text-[14px] mt-1 block">
              &gt; Rendering virtual environment...
            </span>
          </p>
        </div>
      </div>

      {/* === BOUNCING SCROLL ARROW === */}
      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center z-30 pointer-events-auto">
        <a href="#about" className="group">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-[#00f7ff] opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_#00f7ff] transition-all duration-300"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </a>
      </div>

      {/* === 3D BACKGROUND CANVAS === */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.2} />

          <directionalLight
            position={[-2, 5, 2]}
            intensity={1.5}
            color="#915EFF"
          />

          <spotLight position={[5, -2, 5]} intensity={2.5} color="#00f7ff" />

          {/* 2. Added the Stars component right here behind the distorted sphere */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <Sphere args={[1, 100, 200]} scale={2.3} position={[2.5, 0, 0]}>
            <MeshDistortMaterial
              color="black"
              emissive="white"
              distort={0.5}
              speed={2}
            >
              <GradientTexture
                attach="emissiveMap"
                stops={[0.25, 0.75]}
                colors={["#00f7ff", "#915EFF"]}
              />
            </MeshDistortMaterial>
          </Sphere>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
