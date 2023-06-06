import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useNavigation } from '../hooks/useNavigation'


const CustomLink = ({ href, tittle, className="" }) => {
  const navigation = useNavigation();
  return (
    <Link href={href} className={`${className} relative group`}>
      {tittle}
      <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span>
    </Link>)}

const NavBar = () => {
  return (
    <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav className='flex justify-between'>
            <CustomLink href='/' tittle="Home" className='mr-5'></CustomLink>
            <CustomLink href='/about' tittle="About" className='mx-5'></CustomLink>
            <CustomLink href='/projects' tittle="Projects" className='ml-5'></CustomLink>
            <CustomLink href='/articles' tittle="Articles" className=''></CustomLink>
            
        </nav>
        <nav>
            <CustomLink href='/contact' tittle="Contact">Contact</CustomLink>
            <CustomLink href='/' target='_blank'>Home</CustomLink>
            <CustomLink href='/' target='_blank'>Home</CustomLink>
            <CustomLink href='/' target='_blank'>Home</CustomLink>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar