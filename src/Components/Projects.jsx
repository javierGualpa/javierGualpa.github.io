import React from 'react'

import { Card } from './Card'

export const Projects = () => {
  return (
    <section className='bg-about-me py-5 px-5'>
      <h1 className='text-center text-4xl text-white font-semibold mb-10'>Projects</h1>

      <Card />
      <Card />
      <Card />
    </section>
  )
}
