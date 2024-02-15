'use client'

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const AboutSection = () => {
    const body = useRef(null);

    const isInView = useInView(body, {once: true, margin: "-75%"})

    return (
        <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            duration: 0.3,
            ease: [0.64, 0, 0.78, 0],
            }}
            id="about"
            ref={body} 
            className="md:px-12 px-4 py-40 flex flex-col gap-10 text-left" >
            <div className="text-sm font-normal opacity-80 uppercase " >
                About 
            </div>
            <div className="flex lg:text-5xl lg:leading-[1.2]  md:text-3xl text-2xl lg:w-[68rem] md:w-[39rem]  text-black  " >
                We&apos;re a London-based creative agency dedicated to transforming visions into artful reality, with over 200+ satisfied clients.
            </div>
            <div className="lg:text-2xl text-base lg:w-[67rem] md:w-[29rem] opacity-70  " >
                At our creative agency, we specialize in turning your unique ideas into captivating visual realities. With a passion for innovation, we bring your concepts to life, crafting designs that not only meet but exceed your expectations
            </div>
        </motion.div>
    );
}

export default AboutSection;