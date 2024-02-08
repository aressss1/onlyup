import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';


const font = localFont({
    src: '../public/fonts/NeueMetana-Bold.otf',
    variable: '--font-neue-metana',
})

const FeaturedWork = () => {
    return (
        <div className="md:px-12 px-4 py-20 flex flex-col gap-8 text-left" >
            <div className="text-sm font-normal opacity-80 uppercase " >
                Work
            </div>
            <div className="flex md:flex-row flex-col gap-12 md:gap-0 justify-between  md:py-12 py-4 " >
                <div className="md:w-[20%] flex flex-col items-start" >
                    <div className="flex flex-col gap-4 items-start sticky top-[10rem] " >
                        <div className={cn(
                            "text-2xl",
                            font.className
                        )}>
                            Featured Work
                        </div>
                        <Button size="lg" variant="special" className='rounded-[4rem] ' >
                            See all work
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col lg:w-[75%] md:w-[60%] justify-between ' >
                    <div className='flex flex-col lg:flex-row' >

                        <div className='w-[100%] lg:mr-4' >

                            <div className='flex flex-col mb-12' >

                                <Link
                                    href="/"
                                    className='md:h-[36rem] h-[23rem] rounded-[20px] overflow-hidden mb-2 relative '
                                >
                                    <Image
                                        className='absolute top-0 bottom-0 left-0 right-0 z-[1px] w-full h-full object-cover'
                                        src="/work-image.jpg"
                                        alt='work-image'
                                    />
                                </Link>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-end pt-4 pb-4 md:pb-8 lg:pt-0 lg:pb-0' >
                                    <div className='flex flex-col' >
                                        <div className='mb-2 mr-4 text-sm ' >
                                            WebFlow | UI/UX
                                        </div>
                                        <div className='text-2xl font-semibold' >
                                            Agrocneta
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="lg" variant="special" className=' rounded-[4rem]' >
                                            Visit Website
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col mb-12' >

                                <Link
                                    href="/"
                                    className='md:h-[36rem] h-[23rem] rounded-[20px] overflow-hidden mb-2 relative '
                                >
                                    <Image
                                        className='absolute top-0 bottom-0 left-0 right-0 z-[1px] w-full h-full object-cover'
                                        src="/work-image.jpg"
                                        alt='work-image'
                                    />
                                </Link>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-end pt-4 pb-4 md:pb-8 lg:pt-0 lg:pb-0' >
                                    <div className='flex flex-col' >
                                        <div className='mb-2 mr-4 text-sm ' >
                                            WebFlow | UI/UX
                                        </div>
                                        <div className='text-2xl font-semibold' >
                                            Agrocneta
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="lg" variant="special" className=' rounded-[4rem]' >
                                            Visit Website
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-[100%] lg:pl-4 lg:pt-8 ' >

                            <div className='flex flex-col mb-12' >

                                <Link
                                    href="/"
                                    className='md:h-[36rem] h-[23rem] rounded-[20px] overflow-hidden mb-2 relative '
                                >
                                    <Image
                                        className='absolute top-0 bottom-0 left-0 right-0 z-[1px] w-full h-full object-cover'
                                        src="/work-image.jpg"
                                        alt='work-image'
                                    />
                                </Link>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-end pt-4 pb-4 md:pb-8 lg:pt-0 lg:pb-0' >
                                    <div className='flex flex-col' >
                                        <div className='mb-2 mr-4 text-sm ' >
                                            WebFlow | UI/UX
                                        </div>
                                        <div className='text-2xl font-semibold' >
                                            Agrocneta
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="lg" variant="special" className=' rounded-[4rem]' >
                                            Visit Website
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col mb-12' >

                                <Link
                                    href="/"
                                    className='md:h-[36rem] h-[23rem] rounded-[20px] overflow-hidden mb-2 relative '
                                >
                                    <Image
                                        className='absolute top-0 bottom-0 left-0 right-0 z-[1px] w-full h-full object-cover'
                                        src="/work-image.jpg"
                                        alt='work-image'
                                    />
                                </Link>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-end pt-4 pb-4 md:pb-8 lg:pt-0 lg:pb-0' >
                                    <div className='flex flex-col' >
                                        <div className='mb-2 mr-4 text-sm ' >
                                            WebFlow | UI/UX
                                        </div>
                                        <div className='text-2xl font-semibold' >
                                            Agrocneta
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="lg" variant="special" className=' rounded-[4rem]' >
                                            Visit Website
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedWork;