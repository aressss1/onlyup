'use client'

import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useScrollTop } from '@/hooks/use-scroll-top';

import Navlink from "./navlink";
import MenuButton from "./ui/buttons/menu-button";

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-26px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "85px",
        height: "25px",
        top: "-14px",
        right: "16px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

const mobileMenu = {
    open: {
        width: "302px",
        height: "550px",
        top: "-26px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "85px",
        height: "25px",
        top: "-14px",
        right: "16px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

const Navbar = () => {
    const scrolled = useScrollTop();
    const [isActive, setIsActive] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Call initially
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='flex justify-center md:px-12 px-4' >
            <div
                className={cn(
                    "py-[4px] z-[999] border rounded-[4rem] border-black flex justify-between items-center fixed lg:w-[79rem] md:w-[44rem] w-[19rem] top-[20px]",
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

                <div className="relative" >
                    <motion.div
                        className="menu"
                        variants={isMobile ? mobileMenu : menu}
                        animate={isActive ? "open" : "closed"}
                        initial="closed"
                    >
                        <AnimatePresence>
                            {isActive && <Navlink />}
                        </AnimatePresence>
                    </motion.div>
                    <MenuButton isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;