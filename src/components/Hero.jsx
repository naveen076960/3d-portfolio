import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 pt-20 lg:pt-40 px-6 lg:px-0'>
      <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start xl:px-0 sm:px-16 max-w-2xl w-full lg:w-1/2 flex-shrink-0'>
        <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 whitespace-nowrap'>
          Hi, I'm <span className='text-[#915eff]'>Naveen</span>
        </h1>
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100'>
          This is my 3D website, user <br className='sm:block hidden' />
          interfaces and web applications
        </p>
      </div>
      <div style={{ height: '100vh', width: '50vw', minWidth: '300px' }}>
      {/* The Canvas is your window into the 3D world */}
      <Canvas>
        {/* Lights to see the object */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />

        {/* A 3D Sphere */}
        <Sphere args={[1, 100, 200]} scale={2.5}>
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
  )
}

export default Hero