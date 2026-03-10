import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SkillHelix from "./SkillHelix";
import { styles } from "../styles";

const technologies = [
  { name: "React.js" },
  { name: "Three.js" },
  { name: "Node.js" },
  { name: "JavaScript" },
  { name: "Tailwind" },
  { name: "Java" },
  { name: "SQL" },
  { name: "Python" },
  { name: "Linux" },
  { name: "Git" },
  { name: "Figma" },
];

const Tech = () => {
  // Simple hook to shift the DNA model slightly right on desktop so it doesn't overlap the left terminal
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex flex-col justify-between">
      {/* 3D CANVAS - Placed at the back (z-0) */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
          <color attach="background" args={["#000000"]} />
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#00f7ff" />
            <pointLight
              position={[-10, -10, -10]}
              intensity={2}
              color="#915eff"
            />

            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />

            {/* Shifts the DNA to the center-right on desktop, dead center on mobile */}
            <group position={[isMobile ? 0 : 2, -2.5, 0]}>
              <SkillHelix skills={technologies} />
            </group>

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* === UI OVERLAY (z-10) === */}
      {/* Title - Adjusts based on screen size */}
      <div className="absolute top-[20px] lg:top-[40px] w-full z-10 pointer-events-none px-[60px]">
        <h2
          className={`${styles.sectionHeadText} uppercase flex items-center justify-start lg:justify-end gap-3`}
        >
          <span className="w-4 h-8 bg-[#00f7ff] animate-pulse hidden lg:block"></span>
          Technical DNA
        </h2>
        <p className="text-[#915eff] text-center lg:text-right lg:mr-[20px] font-mono text-sm tracking-widest mt-1"></p>
      </div>

      {/* === LEFT HUD: SYSTEM LOG TERMINAL (Fills the empty space) === */}
      <div
        className="hidden lg:flex flex-col absolute left-[20px] top-[20%] z-10 w-[380px] 
       bg-black/40 border border-[#00f7ff]/30 p-5 rounded-lg backdrop-blur-md 
       shadow-[0_0_20px_rgba(0,247,255,0.05)] group transition-all duration-500
        hover:border-[#915eff]/60 hover:shadow-[0_0_30px_rgba(145,94,255,0.15)] 
        pointer-events-auto"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_red]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_yellow]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_green]"></div>
          </div>
          <p className="font-mono text-[10px] text-[#00f7ff] tracking-widest">
            TERM_PID: 8092
          </p>
        </div>

        {/* Terminal Output */}
        <div className="font-mono text-[12px] text-gray-300 leading-relaxed h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          <p>
            <span className="text-green-400">naveen@sys-admin</span>:~/core$
            ./initialize_skills.sh
          </p>
          <p className="text-gray-500 mt-2">
            [{new Date().toISOString().split("T")[1].substring(0, 8)}] Mounting
            DNA structures...
          </p>
          <p className="text-[#915eff] mt-1">
            [OK] Frontend node injected via React_Fiber.
          </p>
          <p className="text-[#915eff] mt-1">
            [OK] Backend data streams stabilized.
          </p>

          <div className="my-3 pl-3 border-l-2 border-[#00f7ff]/50">
            <p className="text-[#00f7ff] text-[10px] mb-1">CURRENT_PROCESS:</p>
            <p className="text-white">Compiling "Study Mate" Modules...</p>
            <p className="text-white">
              Broadcasting "ICT with Naveen" Signal...
            </p>
          </div>

          {/* Easter Egg */}
          <div className="opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-700 ease-in-out mt-3 border-t border-gray-700/50 pt-3">
            <p className="text-red-400 font-bold animate-pulse">
              [WARN] Broadcom Wi-Fi adapter desync... bypassing protocols.
            </p>
            <p className="text-yellow-400 mt-1">
              [ROOT] Rerouting server ping through localhost...
            </p>
            <p className="text-green-400 mt-1">[SUCCESS] Handshake secured.</p>
          </div>

          <p className="text-[#00f7ff] animate-pulse mt-4">
            &gt; Awaiting input_
          </p>
        </div>
      </div>

      {/* === RIGHT HUD: UPGRADED DATA MATRIX === */}
      {/* Exactly 20px from right on desktop, centered at bottom on mobile */}
      <div
        className="absolute right-0 lg:right-[80px] bottom-[20px] 
      lg:bottom-auto lg:top-[20%] w-full lg:w-[320px] z-10 pointer-events-none
       px-[20px] lg:px-0 flex flex-col gap-4"
      >
        {/* Decorative Radar Header */}
        <div className="hidden lg:flex justify-end items-center gap-2 mb-2">
          <div className="font-mono text-[10px] text-gray-500 text-right">
            <p>LAT: 6.9271° N</p>
            <p>LNG: 79.8612° E</p>
          </div>
          <div className="w-8 h-8 border border-[#00f7ff]/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-[#00f7ff] rounded-full animate-ping"></div>
          </div>
        </div>

        {/* FRONTEND NODE */}
        <div className="bg-black/60 border-r-2 border-[#00f7ff] p-4 rounded-l-lg backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#00f7ff]/20 to-transparent"></div>
          <div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2">
            <p className="font-mono text-[9px] text-gray-400">0x00F1</p>
            <h3 className="text-[#00f7ff] font-mono text-xs tracking-widest uppercase flex items-center gap-2">
              Frontend{" "}
              <div className="w-2 h-2 bg-[#00f7ff] animate-pulse"></div>
            </h3>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {[
              "React.js",
              "Three.js",
              "JavaScript",
              "Tailwind",
              "HTML",
              "CSS",
              ,
            ].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[11px] font-mono text-white bg-[#00f7ff]/10 border border-[#00f7ff]/30 hover:bg-[#00f7ff]/20 transition-colors pointer-events-auto cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BACKEND & DB NODE */}
        <div className="bg-black/60 border-r-2 border-[#915eff] p-4 rounded-l-lg backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#915eff]/20 to-transparent"></div>
          <div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2">
            <p className="font-mono text-[9px] text-gray-400">0x00B2</p>
            <h3 className="text-[#915eff] font-mono text-xs tracking-widest uppercase flex items-center gap-2">
              Backend <div className="w-2 h-2 bg-[#915eff] animate-pulse"></div>
            </h3>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {["Java", "Node.js", "Python", "SQL", "Hibernate", "PHP"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-[11px] font-mono text-white bg-[#915eff]/10 border border-[#915eff]/30 hover:bg-[#915eff]/20 transition-colors pointer-events-auto cursor-default"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        {/* SYSTEM & TOOLS NODE */}
        <div className="bg-black/60 border-r-2 border-green-400 p-4 rounded-l-lg backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-green-400/20 to-transparent"></div>
          <div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2">
            <p className="font-mono text-[9px] text-gray-400">0x00S3</p>
            <h3 className="text-green-400 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
              Systems <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
            </h3>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {["Linux", "Git", "Figma", "REST_API"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[11px] font-mono text-white bg-green-400/10 border border-green-400/30 hover:bg-green-400/20 transition-colors pointer-events-auto cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
