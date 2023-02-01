import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'



const NavBar = () => {

  const openNavBar = (evt) => {
    evt.preventDefault()
    setIsOpen(!isOpen)
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`${isOpen ? 'h-screen' : ''} bg-gris-oscuro text-white bg-nav-var flex flex-col gap-3 sm:justify-end sm:flex-row px-3 py-1 `}>
      < a href="" onClick={openNavBar} className={'text-2xl m-4 sm:hidden hover:text-white font-medium'}  > <GiHamburgerMenu></GiHamburgerMenu></ a>

      <ul className={` ${isOpen ? 'gap-4' : 'hidden'} sm:flex sm:flex-row gap-4`}>
        {/* <button className='' onClick={openNavBar}>X</button> */}
        < li className='hover:underline hover:text-zinc-400 py-2 px-4'> <a href="#about" className='block'>About</a></li>
        <li className='hover:underline  hover:text-zinc-400 py-2 px-4'><a href="#projects" className='block'>Projects</a></li>
        <li className='hover:underline hover:text-zinc-400 py-2 px-4'><a href="#skills" className='block'>Skills</a></li>
        <li className='hover:underline hover:text-zinc-400 py-2 px-4'><a href="#contact" className='block'>Contact</a></li>
      </ul >
    </nav >
  )
}

export default NavBar