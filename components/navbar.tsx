'use client'

import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useScrollTop } from '@/hooks/use-scroll-top';

import CustomButton from "./custom-button";
import Navlink from "./navlink";

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

const Navbar = () => {
    const scrolled = useScrollTop();
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='flex justify-center md:px-12 px-4' >
            <div
                className={cn(
                    "py-[4px] z-[99999] border rounded-[4rem] border-black flex justify-between items-center fixed lg:w-[79rem] md:w-[44rem] w-[19rem] top-[20px]",
                    scrolled ? "bg-transparent backdrop-blur-[6px] backdrop-filter" : "bg-[url('/bg-2.jpg')]"
                )} >
                <div className="flex gap-2 p-2 justify-center items-center  " >
                    <Image
                        src="Logo.svg"
                        alt="logo"
                    />
                    <h1 className="text-xl" >
                        OnlyUp
                    </h1>
                </div>

                <div >
                    <motion.div
                        className="menu"
                        variants={menu}
                        animate={isActive ? "open" : "closed"}
                        initial="closed"
                    >
                        <AnimatePresence>
                            {isActive && <Navlink />}
                        </AnimatePresence>
                    </motion.div>
                    <CustomButton isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;