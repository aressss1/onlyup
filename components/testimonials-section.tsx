'use client'

import Image from "next/image";
import {  motion } from 'framer-motion';
import { InfiniteMovingLogos } from "./infinite-moving-logos";


const TestimonialsSection = () => {
    const reviews = [
        {
            review: " OnlyUp Agency turns ideas into art with finesse. Working with them was a breeze, and the results were beyond our expectations. Highly recommend! ",
            clientName: "Mark Harris",
            clientRole: "CEO & Founder",
            clientCompanyName: "VisionCraft Co.",
            clientImage: "/c-1.jpg"
        },
        {
            review: " OnlyUp Agency – where creativity meets perfection. They brought our concept to life in ways we hadn't imagined. Professional, innovative, and truly outstanding! ",
            clientName: "Ryan Foster",
            clientRole: "Founder",
            clientCompanyName: "DreamBuilders Inc.",
            clientImage: "/c-2.jpg"
        },
    ]

    const clientLogos = [
        {
            src: "/logos/l-1.svg",
            name: "l-1"
        },
        {
            src: "/logos/l-2.svg",
            name: "l-2"
        },
        {
            src: "/logos/l-3.svg",
            name: "l-3"
        },
        {
            src: "/logos/l-4.svg",
            name: "l-4"
        },
    ]

    const varaiant = {
        visible: {opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
    }

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={varaiant}
            transition={{
                duration: 0.6,
                ease: "backInOut",
                delay: 0.9
            }}
            id="testimonials" 
            className="flex flex-col gap-8 md:px-12 px-4 py-28 " 
        >
            <div className="text-sm font-normal opacity-80 uppercase " >
                Testimonials
            </div>

            <div className=" lg:px-[16rem] md:px-16 py-10 flex lg:flex-row flex-col gap-6 " >
                {reviews.map((review) => (
                    <div key={review.clientName} className="bg-white rounded-xl md:p-12 p-6 " >
                        <p className="text-2xl opacity-60  " >
                            &quot;{review.review}&quot;
                        </p>
                        <div className="lg:mt-10 mt-14 flex" >
                            <Image
                                className="md:w-[4.5rem] md:h-[4.5rem] h-16 w-16 rounded-full object-cover"
                                alt={review.clientName}
                                src={review.clientImage}
                            />
                            <div className="flex flex-col text-sm gap-1 pl-8 my-auto" >
                                <div>{review.clientName}</div>
                                <div>{review.clientCompanyName}</div>
                                <div>{review.clientRole}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-32">
                <InfiniteMovingLogos 
                    items={clientLogos}
                    direction="left"
                    speed="fast"
                />
            </div>
        </motion.div>
    );
}

export default TestimonialsSection;