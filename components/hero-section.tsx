import Image from "next/image";
import localFont from 'next/font/local'

import { cn } from "@/lib/utils";

import ExploreButton from "./explore-button";

const font = localFont({
    src: '../public/fonts/NeueMetana-Bold.otf',
    variable: '--font-neue-metana',
})


const HeroSection = () => {
    return (
        <div className="py-5 h-screen flex flex-col justify-between gap-28 items-center " >
            <div className="flex flex-col items-center gap-5 my-auto pt-36 " >
                <div className={cn(
                    font.className,
                    "lg:text-6xl md:text-5xl  text-2xl lg:leading-[4rem] lg:w-[706px] md:w-[565px] w-[283px] leading-tight "
                )}>
                    We Make Creative Things, EVERYDAY.
                </div>
                <div className="text-center px-[18px] md:px-20 lg:px-72" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi enim non sed saepe veritatis asperiores iste minima provident id!
                </div>
            </div>

            <div>
                <ExploreButton />
            </div>
        </div>
    );
}

export default HeroSection;