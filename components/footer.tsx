'use client'

import Image from 'next/image';
import Link from 'next/link';
import {  motion } from 'framer-motion';

import { Separator } from './ui/separator';

const Footer = () => {
    const varaiant = {
        visible: {opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
    }

    return (
        <div id="contact" className='bg-white text-black' >
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={varaiant}
                transition={{
                    duration: 0.6,
                    ease: "circInOut",
                    delay: 0.4
                }}    
                className=" flex flex-col gap-12 py-24 md:px-12 px-4" 
            >
                <div className="text-sm font-normal opacity-80 uppercase " >
                    Contact
                </div>

                <div className=' flex flex-col md:flex-row gap-12 md:gap-0 justify-between' >
                    <div className='flex flex-col text-left gap-6' >
                        <div className='text-base ' >
                            Have a project? Let&apos; Talk.
                        </div>
                        <div className='text-3xl md:text-5xl border-container  ' >
                            <p className='pb-2' >info@onlyup.com</p>
                            <div className='border-b-[6px] border-black border-transition '/>
                        </div>
                    </div>
                    <div className="flex gap-8   " >
                        <Link
                            href="/"
                            className='opacity-80  hover:opacity-100 cursor-pointer '
                        >
                            <Image src='/instagram.svg' alt='instagram' className='h-6 w-6 ' />
                        </Link>

                        <Link
                            href="/"
                            className='opacity-80  hover:opacity-100 cursor-pointer '
                        >
                            <Image src='/twitter.svg' alt='twitter' className='h-6 w-6' />
                        </Link>
                        <Link
                            href="/"
                            className='opacity-80  hover:opacity-100 cursor-pointer '
                        >
                            <Image src='/linkedin.svg' alt='linkedin' className='h-6 w-6 ' />
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col gap-2 text-left' >
                    <div className='text-base' >
                        Job Applications
                    </div>
                    <div className='text-base opacity-60 hover:opacity-100 ' >
                        apply@onlyup.com
                    </div>
                </div>
            </motion.div>

            <Separator className='bg-[#C4C4C4]' />

            <div className=" flex justify-center flex-col md:flex-row  text-sm text-center py-4 opacity-70 " >
                Copyright &copy; 2024 All rights reserved.
                <div className='hidden md:flex self-end text-xs opacity-85 hover:opacity-100 ' >
                    <Link href="/" >
                        Developed by Faizan Asghar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;