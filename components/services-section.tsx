'use client'

import { ArrowUpRight } from "lucide-react";
import {  motion } from 'framer-motion';

const ServicesSection = () => {
    const services = [
        {
            type: "UX Consultant"
        },
        {
            type: "Product Interface Design"
        },
        {
            type: "Branding"
        },
        {
            type: "Marketing Design"
        },
        {
            type: "Mockup Design"
        },

    ]

    const varaiant1 = {
        visible: {opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
    }

    const animation = {
        initial: {y: "100%"},
        enter: (i: number) => ({
            y: "0", 
            transition: {
                duration: 0.5, 
                ease: [0.33, 1, 0.68, 1],  
                delay: 0.6 * i
            }})
      }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={varaiant1}
            transition={{
                duration: 0.6,
                ease: [0.11, 0, 0.5, 0],
                delay: 0.4
            }} 
            id="services" 
            className="flex flex-col text-left lg:gap-16 gap-12 py-12 md:px-12 px-4" 
        >
            <div className="text-sm font-normal opacity-80 uppercase " >
                Services
            </div>
            <div className="flex flex-col lg:gap-14 gap-12" >
                {services.map((service , i) => (
                    <div key={service.type} className="group overflow-hidden " 
                    >
                        <motion.div
                            custom={i}  
                            variants={animation} 
                            initial="initial" 
                            animate={ "enter" }     
                            className="lg:text-6xl md:text-4xl text-xl text-black group-hover:text-[#ef4242] flex items-center gap-2" 
                        >
                            {service.type}
                            <ArrowUpRight
                                className=" group-hover:text-[#ef4242] opacity-0 group-hover:opacity-100 lg:w-20 lg:h-20 md:w-16 w-8 h-12 stroke-[1.5] " 
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default ServicesSection;