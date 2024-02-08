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
        <div className="relative" >
            <div 
                className="bg-[url('/bg-3.jpg')] absolute top-0 opacity-50 h-screen w-full object-cover " 
            />
            <div className="py-5 h-screen flex flex-col relative z-[10] justify-between gap-28 items-center "  >
                <div className="flex flex-col items-center gap-5 my-auto pt-36 " >
                    <div className={cn(
                        font.className,
                        "lg:text-6xl md:text-5xl  text-2xl lg:leading-[5rem] lg:w-[730px] md:w-[565px] w-[283px] text-center "
                    )}>
                        Turning Ideas into Artful Realities.
                    </div>
                </div>

                <div>
                    <ExploreButton />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;