import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// --- PROJECT DATA ---
const projects = [
  {
    name: "Study Mate Core",
    description:
      "A comprehensive educational ecosystem designed to streamline student workflows. Features include peer-to-peer resource sharing, integrated 'Kuppi' session scheduling, and a robust system architecture designed for scale.",
    tags: [
      { name: "java", color: "text-[#00f7ff]" },
      { name: "hibernate", color: "text-[#915eff]" },
      { name: "mysql", color: "text-blue-400" },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // Placeholder: Replace with your actual screenshot
    source_code_link: "https://github.com/",
    status: "ACTIVE_DEVELOPMENT",
  },
  {
    name: "ICT Broadcast Node",
    description:
      "Digital infrastructure and brand identity for the 'ICT with Naveen' educational initiative. Serves interactive tech education for Grade 6-11 students, utilizing custom graphics, YouTube broadcasting, and structured learning modules.",
    tags: [
      { name: "content-creation", color: "text-[#00f7ff]" },
      { name: "graphic-design", color: "text-[#915eff]" },
      { name: "education", color: "text-green-400" },
    ],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", // Placeholder
    source_code_link: "https://youtube.com/",
    status: "LIVE_TRANSMISSION",
  },
  {
    name: "Holographic Web Matrix",
    description:
      "A highly interactive 3D WebGL portfolio environment. Built to render complex geometries like floating DNA data structures and live terminal HUDs without sacrificing performance or frame rates.",
    tags: [
      { name: "react", color: "text-[#00f7ff]" },
      { name: "three.js", color: "text-[#915eff]" },
      { name: "tailwind", color: "text-pink-400" },
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", // Placeholder
    source_code_link: "https://github.com/",
    status: "ACTIVE_DEVELOPMENT",
  },
];

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  status,
}) => {
  const statusColors = {
    ACTIVE_DEVELOPMENT: "text-yellow-400 border-yellow-400/50",
    LIVE_TRANSMISSION: "text-green-400 border-green-400/50",
  };
  const statusStyle = statusColors[status] || "text-white border-white/50";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="bg-black/60 border border-gray-800 p-5 rounded-xl sm:w-[340px] w-full backdrop-blur-md relative group hover:border-[#00f7ff]/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,247,255,0.15)]"
      >
        {/* Holographic Scanline Overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            backgroundImage: "linear-gradient(transparent 50%, #00f7ff 50%)",
            backgroundSize: "100% 4px",
          }}
        ></div>

        {/* Status Badge */}
        <div
          className={`absolute top-2 right-2 z-10 bg-black/80 border px-2 py-1 rounded text-[10px] font-mono animate-pulse ${statusStyle}`}
        >
          [{status}]
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden border border-gray-700 group-hover:border-[#00f7ff]/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />

          {/* GitHub/Link Button */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-gray-600 hover:border-[#00f7ff] hover:shadow-[0_0_10px_#00f7ff]"
            >
              <svg
                className="w-1/2 h-1/2 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] uppercase tracking-wide group-hover:text-[#00f7ff] transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px] font-mono">
            &gt; {description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] font-mono ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#915eff] font-mono`}></p>
        <h2 className={`${styles.sectionHeadText} `}>Project Nodes</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] font-mono"
        >
          The following data packets showcase my technical capabilities through
          real-world applications. Each node links to the core repository and
          live deployment status.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
