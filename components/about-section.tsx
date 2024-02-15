'use client'

import {  motion } from 'framer-motion';

const AboutSection = () => {
    const varaiant = {
        visible: {opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    }

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={varaiant}
            transition={{
                duration: 0.6,
                ease: [0.64, 0, 0.78, 0],
            }}
            id="about"
            className="md:px-12 px-4 py-40 flex flex-col gap-10 text-left" 
        >
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