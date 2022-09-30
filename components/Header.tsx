import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        className='flex flex-row items-center'
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        >
            {/* Icons */}
            <SocialIcon url="https://www.linkedin.com/in/guilherme-augusto-rodrigues-851676186/" 
            fgColor="gray" 
            bgColor="transparent" />

            <SocialIcon url="https://github.com/guizao37" 
            fgColor="gray" 
            bgColor="transparent" />

            <SocialIcon url="https://twitter.com/guizao0307" 
            fgColor="gray" 
            bgColor="transparent" />

            <SocialIcon url="https://www.instagram.com/gui_rodrigues37/" 
            fgColor="gray" 
            bgColor="transparent" />
        </motion.div>
        <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        >
            <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="gray" 
            bgColor="transparent" />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get in Touch
            </p>
        </motion.div>
    </header>
  )
}