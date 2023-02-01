import React from 'react'

export const Skills = () => {
  return (
    <section className='bg-about-me py-5 px-5 flex flex-col justify-center mb-8'>
      <h1 className='text-center text-4xl text-white font-semibold mb-10'>Skills</h1>

      <div className='grid grid-cols-2 w-90 items-center justify-items-center gap-8'>
        <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="" className='' />
        <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png " className='h-16' alt="" />
        <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" />
        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
        <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="" />
      </div>
    </section>
  )
}
