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
        >
            <div
                className="el"
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
        <div className="normalPerspectiveText">
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}