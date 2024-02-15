'use client'

import { Button } from './ui/button';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';


const FeaturedWork = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    
    })

    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const featuredProjectR1 = [
        {
            projextImageSrc: "/p-2.jpg",
            projectType: "Marketing Design",
            projectName: "Flam",
            projectLink: "/",
        },
        {
            projextImageSrc: "/p-4.jpg",
            projectType: "Mockup Design",
            projectName: "Walden Watch",
            projectLink: "/",
        }
    ]

    const featuredProjectR2 = [
        {
            projextImageSrc: "/p-3.png",
            projectType: "Mockup Design",
            projectName: "Rooney Mae",
            projectLink: "/",
        },
        {
            projextImageSrc: "/p-1.jpg",
            projectType: "Branding",
            projectName: "Reedly C.",
            projectLink: "/",
        }
    ]

    return (
        <div 
            id="work"
            ref={container} 
            className="md:px-12 px-4 py-20 flex flex-col gap-8 text-left" >
            <div className="text-sm font-normal opacity-80 uppercase " >
                Work
            </div>
            <div className="flex md:flex-row flex-col gap-12 md:gap-0 justify-between  md:py-12 py-4 " >
                <div className="md:w-[20%] flex flex-col items-start pb-[43px] " >
                    <div className="flex flex-col gap-4 items-start sticky top-[10rem] " >
                        <div className="text-2xl text-black font-medium "
                        >
                            Featured Work
                        </div>
                        <Button size="lg" variant="special" className='rounded-[4rem] opacity-80 ' >
                            See all work
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col lg:w-[75%] md:w-[60%] justify-between ' >
                    <div className='flex flex-col lg:flex-row' >

                        <div className='w-[100%] lg:mr-4' >
                            {featuredProjectR1.map((project) => (
                                <motion.div 
                                    key={project.projectName}
                                    className='flex flex-col mb-12'
                                    style={{y: 0}}
                                >
                                    <Link
                                        href={project.projectLink}
                                        className='md:h-[36rem] h-[23rem] rounded-[20px] overflow-hidden mb-2 relative '
                                    >
                                        <Image
                                            className='absolute top-0 bottom-0 left-0 right-0 z-[1px] w-full h-full object-cover'
                                            src={project.projextImageSrc}
                                            alt={project.projectName}
                                        />
                                    </Link>
                                    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-end pt-4 pb-4 md:pb-8 lg:pt-0 lg:pb-0' >
                                        <div className='flex flex-col' >
                                            <div className='mb-2 mr-4 text-sm opacity-75 ' >
                                                {project.projectType}
                                            </div>
                                            <div className='text-2xl font-medium' >
                                                {project.projectName}
                                            </div>
                                        </div>
                                        <div>
                                            <Button size="lg" variant="special" className=' rounded-[4rem]  opacity-80 ' >
                                                View case study
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className='w-[100%] lg:pl-4 lg:pt-8 ' >
                            {featuredProjectR2.map((project) => (
                                <motion.div 
                                    key={project.projectName} 
                                    className='flex flex-col mb-12'
                                    style={{y: lg}} 
                                >
                                    <Link
                                        href={project.projectLink}
                                        className='md:h-[36rem] h-[23rem] rounded-[20px] overflow-hidden mb-2 relative '
                                    >
                                        <Image
                                            className='absolute top-0 bottom-0 left-0 right-0 z-[1px] w-full h-full object-cover'
                                            src={project.projextImageSrc}
                                            alt={project.projectName}
                                        />
                                    </Link>
                                    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-end pt-4 pb-4 md:pb-8 lg:pt-0 lg:pb-0' >
                                        <div className='flex flex-col' >
                                            <div className='mb-2 mr-4 text-sm opacity-75 ' >
                                                {project.projectType}
                                            </div>
                                            <div className='text-2xl font-medium' >
                                                {project.projectName}
                                            </div>
                                        </div>
                                        <div>
                                            <Button size="lg" variant="special" className=' rounded-[4rem] opacity-80 ' >
                                                View case study
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedWork;