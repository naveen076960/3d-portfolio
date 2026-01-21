import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen mx-auto flex flex-row items-start gap-5 pt-40'>
      <div className='flex flex-col justify-start items-start xl:px-0 sm:px-16 px-6 max-w-7xl'>
        <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
          Hi, I'm <span className='text-[#915eff]'>Naveen</span>
        </h1>
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100'>
          I develop 3D visuals, user <br className='sm:block hidden' />
          interfaces and web applications
        </p>
      </div>
    </section>
  )
}

export default Hero