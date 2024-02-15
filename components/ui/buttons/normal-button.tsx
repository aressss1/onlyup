'use client'

import { useRouter }  from "next/navigation";
import { motion } from 'framer-motion';


interface NormalButtonProps {
    label: string,
    href: string,
}

const NormalButton = ({
    label,
    href,
}: NormalButtonProps) => {
    const router = useRouter();

    return ( 
        <div className="normalButton">
        <motion.div
            className="normalSlider"
            // animate={{ top: isActive ? "-100%" : "0%" }}
            // transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        >
            <div
                className="normalEl"
                // onClick={() => { toggleMenu() }}
            >
                <PerspectiveText label={label} />
            </div>
        </motion.div>
    </div>
     );
}
 
export default NormalButton;

function PerspectiveText({
    label
}: {
    label: string
}) {
    return (
        <div className="perspectiveText">
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}