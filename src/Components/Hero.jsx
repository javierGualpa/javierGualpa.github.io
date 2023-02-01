import React from 'react'

export const Hero = () => {
  return (
    <section id="about" className='py-8 px-5 flex flex-col gap-8 justify-center items-center sm:flex-row sm:justify-evenly text-white sm:mt-20 bg-about-me'>
      <div className='basis-5/12 flex flex-col gap-4'>
        <h1 className='text-5xl font-semibold tracking-wider'>Javier Gualpa</h1>
        <h2 className='text-4xl text-gris font-medium '>Frontend Developer</h2>
        <div className='mt-4'>
          <p className='text-gris-claro text-xl'>My name is John Doe and I am a web developer. I have experience with HTML, CSS, JavaScript, and PHP. I am passionate about creating beautiful and functional websites that are easy to use.</p>
        </div>

      </div>
      <div className='bg-gris-medio rounded-full overflow-hidden flex items-center justify-center w-60 h-60 shrink-0'>
        <img src="/src/assets/img.png " alt="" className='h-64' />
      </div>

      <button className={`px-6 py-2 rounded-lg  border mt-4 text-zinc-100 font-medium ${'hover:bg-zinc-400 hover:text-black bg-zinc-900'}`}>Dowload CV</button>
    </section >
  )
}
