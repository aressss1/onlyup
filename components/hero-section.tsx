'use client'

import localFont from 'next/font/local'
import { motion } from 'framer-motion';

import { cn } from "@/lib/utils";

import ExploreButton from "./explore-button";
import { useRef } from 'react';

const font = localFont({
    src: '../public/fonts/GT-Super-Display-Medium-Trial.otf',
    variable: '--font-gt-super',
})

const heroPhrases = [
    "Turning Ideas into",
    "Artful Realities."
]


const HeroSection = () => {

    const animation = {
        initial: {y: "100%"},
        enter: (i: number) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
      }


    return (
        <div className="relative" >
            <div
                className="bg-[url('/bg-2.jpg')] absolute top-0 opacity-50 h-[90vh] md:h-screen w-full object-cover "
            />
            <div className="py-5 h-[90vh] md:h-screen flex flex-col relative z-[10] justify-between gap-28 items-center "  >
                <div className="flex flex-col items-center gap-3 my-auto pt-36 " >
                    {heroPhrases.map((phrase , i) => (
                        <div
                            key={i}
                            className={cn(
                            font.className,
                            "lg:text-7xl md:text-5xl  text-2xl lg:leading-[5rem] lg:w-[730px] md:w-[565px] w-[263px] text-center overflow-hidden "
                    )}>
                        <motion.p 
                            custom={i}  
                            variants={animation} 
                            initial="initial" 
                            animate={ "enter" } 
                        >
                            {phrase}
                        </motion.p>
                    </div>
                    ))}
                </div>

                <div>
                    <ExploreButton />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;