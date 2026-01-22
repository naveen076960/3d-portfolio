import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Starry night background */}
      <div className='absolute inset-0 bg-black pointer-events-none'>
        {/* Stars with blinking animation */}
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>
        <div className='absolute inset-0'>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className='absolute bg-white rounded-full'
              style={{
                width: Math.random() > 0.5 ? '2px' : '1px',
                height: Math.random() > 0.5 ? '2px' : '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `blink ${Math.random() * 3 + 1.5}s infinite`,
              }}
            />
          ))}
        </div>
        {/* Purple gradient overlay */}
        <div className='absolute inset-0 opacity-20 bg-gradient-to-t from-[#915EFF]/20 to-transparent' />
      </div>

      <div className='absolute inset-0 z-10 w-full lg:w-1/2 lg:left-[43%]'>
  <ComputersCanvas />
</div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-30 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Animated dashed line design */}
          <div className='w-1 h-1 bg-[#915EFF] rounded-full mb-2' />
          <div className='w-1 h-1 bg-[#915EFF] rounded-full mb-2 opacity-75' />
          <div className='w-1 h-1 bg-[#915EFF] rounded-full mb-2 opacity-50' />
          <div className='w-0.5 sm:h-64 h-32 bg-gradient-to-b from-[#915EFF] via-[#915EFF] to-transparent' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, <br className='sm:block hidden' /> I'm <span className='text-[#915EFF]'>Naveen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            This is my 3D web portfolio, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center z-30 pointer-events-auto'>
        <a href='#about'>
          {/* We use a motion.svg instead of a div so we can animate it */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            // Tailwind classes to set size and color (white)
            className="w-10 h-10 text-white"
            // The Animation
            animate={{
              y: [0, 15, 0], // Move down 15px, then back up
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut", // Makes the bounce feel smoother
            }}
          >
            {/* The shape of the downward arrow (chevron) */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </a>
      </div>

      // 3D Sphere with lighting effects
      
       <div style={{ height: '100vh', width: '100vw' }}>

      <Canvas>
        {/* Ambient Light: General brightness */}
          <ambientLight intensity={0.5} />

          {/* LIGHT 1: Purple Light from the Top Left */}
          <directionalLight position={[-2, 5, 2]} intensity={1} color="#915EFF" />

          {/* LIGHT 2: Blue Light from the Bottom Right (Creates the gradient) */}
          <spotLight position={[5, -2, 5]} intensity={2} color="#00d8ff" />

        <Sphere args={[1, 100, 200]} scale={2.3} position={[2.5, 0, 0]} >

          <MeshDistortMaterial

            color="#8352FD"

            attach="material"

            distort={0.5}

            speed={2}
          />
        </Sphere>

        {/* Allows you to rotate the object with your mouse */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
    </section>
  );
};

export default Hero;