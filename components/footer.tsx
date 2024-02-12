
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="bg-white text-black flex py-28 md:px-12 px-4" >
            <div className='flex text-left gap-6' >
                <div className='text-base' >
                    Let&apos; Talk.
                </div>
                <div className='text-5xl' >
                    info@onlyup.com
                </div>
            </div>
            
            <div className='flex flex-col text-left' >
                <div className='text-base' >
                    Job Applications
                </div>
                <div className='tetx-base opacity-90' >
                    apply@onlyup.com
                </div>
            </div>

            <div className='flex justify-between' >
                <div className="flex flex-col text-left gap-12" >
                    <div className="text-7xl" >
                        ONLYUP
                    </div>
                    <div className="text-lg" >
                        &copy; OnlyUp. All rights reserved.
                    </div>
                </div>
                <div className="flex gap-8 opacity-80  " >
                    <Image src='/instagram.svg' alt='instagram' className='h-6 w-6' />
                    <Image src='/twitter.svg' alt='twitter' className='h-6 w-6' />
                    <Image src='/linkedin.svg' alt='linkedin' className='h-6 w-6' />
                </div>
            </div>
        </div>
    );
}

export default Footer;