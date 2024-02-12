
import Image from 'next/image';

const Footer = () => {
    return ( 
        <div className="bg-white text-black flex justify-between  py-12 md:px-12 px-4" >
            <div className="flex flex-col text-left gap-4" >
                <div className="text-4xl" >
                    ONLYUP
                </div>
                <div className="text-lg" >
                    &copy; OnlyUp. All rights reserved.
                </div>
            </div>
            <div className="flex gap-4  " >
                <Image src='/instagram.svg' alt='instagram' className='h-14 w-14'  />
                <Image src='/twitter.svg' alt='twitter' className='h-14 w-14' />
                <Image src='/linkedin.svg' alt='linkedin'  className='h-14 w-14' />
            </div>
        </div>
     );
}
 
export default Footer;