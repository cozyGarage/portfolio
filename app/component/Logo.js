'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from "./logo.png";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href='/' className='w-16 h-16 flex items-center justify-center rounded-full'
        whileHover={{ backgroundColor: ["#000000" , "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "rgba(131,58,180,1)", "#000000"], 
        transition: { duration: 1, repeat: Infinity }
      }}
        >
        <Image src={logo} alt="logo" className="w-16 h-16" />
      </MotionLink>
    </div>
  )
}

export default Logo