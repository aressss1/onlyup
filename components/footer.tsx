import Image from 'next/image';

import { Separator } from './ui/separator';

const Footer = () => {
    return (
        <div className='bg-white text-black' >
            <div className=" flex flex-col gap-12 py-24 md:px-12 px-4" >
                <div className='flex justify-between' >
                    <div className='flex flex-col text-left gap-6' >
                        <div className='text-base' >
                            Let&apos; Talk.
                        </div>
                        <div className='text-5xl border-b-4 border-black ' >
                            info@onlyup.com
                        </div>
                    </div>
                    <div className="flex gap-8 opacity-80  " >
                        <Image src='/instagram.svg' alt='instagram' className='h-6 w-6' />
                        <Image src='/twitter.svg' alt='twitter' className='h-6 w-6' />
                        <Image src='/linkedin.svg' alt='linkedin' className='h-6 w-6' />
                    </div>
                </div>

                <div className='flex flex-col gap-3 text-left' >
                    <div className='text-base' >
                        Job Applications
                    </div>
                    <div className='tetx-base opacity-90' >
                        apply@onlyup.com
                    </div>
                </div>
            </div>

            <Separator className='bg-[#C4C4C4]' />

            <div className="text-base text-center py-4" >
                Copyright &copy; 2024 All rights reserved.
            </div>
        </div>
    );
}

export default Footer;