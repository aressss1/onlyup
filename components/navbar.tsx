'use client'

import Image from "next/image";

import { cn } from "@/lib/utils";
import { useScrollTop } from '@/hooks/use-scroll-top';

import { Button } from "./ui/button";




const Navbar = () => {
    const scrolled = useScrollTop()

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
                <Button variant="special" className='rounded-[4rem] h-9 mr-2 '  >
                    Menu
                </Button>
            </div>
        </div>
    );
}

export default Navbar;