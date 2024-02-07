'use client'

import localFont from 'next/font/local'
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useScrollTop } from '@/hooks/use-scroll-top';

import { Button } from "./ui/button";


const font = localFont({
    src: '../public/fonts/NeueMetana-Bold.otf',
    variable: '--font-neue-metana',
})

const Navbar = () => {
    const scrolled = useScrollTop()

    return (
        <div className='flex justify-center md:px-12 px-4' >
            <div
                className={cn(
                    "bg-bg py-[2px] z-[99999] border rounded-[4rem] border-black flex justify-between items-center fixed lg:w-[79rem] md:w-[44rem] w-[19rem] top-[20px]",
                    scrolled && "bg-transparent backdrop-blur-[6px] backdrop-filter"
                )} >
                <div className="flex gap-2 p-2 justify-center items-center  " >
                    <Image
                        src="Logo.svg"
                        alt="logo"
                    />
                    <h1 className={cn(
                        // font.className,
                        "text-xl "
                    )} >
                        OnlyUp
                    </h1>
                </div>
                <Button variant="special" className='rounded-[4rem]'  >
                    Menu
                </Button>
            </div>
        </div>
    );
}

export default Navbar;