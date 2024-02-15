import Image from 'next/image';

import { Separator } from './ui/separator';

const Footer = () => {
    return (
        <div id="contact" className='bg-white text-black' >
            <div className=" flex flex-col gap-12 py-24 md:px-12 px-4" >
                <div className="text-sm font-normal opacity-80 uppercase " >
                    Contact
                </div>

                <div className=' flex flex-col md:flex-row gap-12 md:gap-0 justify-between' >
                    <div className='flex flex-col text-left gap-6' >
                        <div className='text-base  ' >
                            Have a project? Let&apos; Talk.
                        </div>
                        <div className='text-3xl md:text-5xl border-b-4 border-black hover:border-[#ef4242] ' >
                            <p className='pb-2 hover:text-[#ef4242]' >info@onlyup.com</p>
                        </div>
                    </div>
                    <div className="flex gap-8 opacity-80  " >
                        <Image src='/instagram.svg' alt='instagram' className='h-6 w-6 hover:text-[#ef4242] hover:opacity-100' />
                        <Image src='/twitter.svg' alt='twitter' className='h-6 w-6 hover:text-[#ef4242]  hover:opacity-100' />
                        <Image src='/linkedin.svg' alt='linkedin' className='h-6 w-6 hover:text-[#ef4242] hover:opacity-100' />
                    </div>
                </div>

                <div className='flex flex-col gap-2 text-left' >
                    <div className='text-base' >
                        Job Applications
                    </div>
                    <div className='text-base opacity-60 hover:text-opacity-100 hover-text-[#ef4242]' >
                        apply@onlyup.com
                    </div>
                </div>
            </div>

            <Separator className='bg-[#C4C4C4]' />

            <div className="text-sm text-center py-4 opacity-70 " >
                Copyright &copy; 2024 All rights reserved.
            </div>
        </div>
    );
}

export default Footer;