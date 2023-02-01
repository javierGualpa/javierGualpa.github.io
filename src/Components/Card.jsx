import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrDeploy } from 'react-icons/gr'

export const Card = () => {
  return (
    <div className='border border-white p-4 bg-card flex flex-col gap-4 mb-4'>
      <h1 className='text-center text-3xl font-medium'>TodoList</h1>
      <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt="" />
      <p className='text-zinc-300 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo explicabo unde odit qui dolor quae mollitia optio. Ex necessitatibus, pariatur beatae impedit asperiores quo qui et illum modi expedita.</p>
      <div className='flex gap-6 text-2xl mt-2'>
        <a href="" className='hover:text-zinc-200'><AiFillGithub /></a>
        <a href="" className='hover:text-zinc-200'><GrDeploy /></a>
      </div>
    </div>
  )
}
