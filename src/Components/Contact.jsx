import React from 'react'

export const Contact = () => {
  return (
    <section className='bg-about-me py-5 px-5 flex flex-col justify-center text-white'>
      <h1 className='text-center text-4xl text-white font-semibold mb-10'>Contact</h1>
      <form action="" className='w-90 flex flex-col gap-3'>
        <div className='flex flex-col'>
          <label htmlFor="" className='text-lg'>Nombre Completo</label>
          <input type="text" className='w-full p-1' />
        </div>
        <div className='flex flex-col '>
          <label htmlFor="" className='text-lg'>Correo Electronico</label>
          <input type="text" className='w-full p-1' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="" className='text-lg'>Mensaje</label>
          <textarea name="" id="" className='w-full' rows="10"></textarea>
        </div>
        <button className='bg-zinc-600 rounded-sm py-1 px-8'>Enviar</button>

      </form>
    </section>
  )
}
