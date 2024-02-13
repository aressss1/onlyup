import { motion } from 'framer-motion';

interface CustmButtonProps {
    isActive: boolean;
    toggleMenu: () => void;
}

export default function CustomButton({
    isActive,
    toggleMenu
}: CustmButtonProps) {
    return (
        <div className="relative">
            <motion.div
                className="button bg-black border-t-4 border-yellow-300 rounded-full overflow-hidden"
                animate={{ top: isActive ? '-100%' : '0%' }}
                transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
            >
                <div className="el bg-green-300" onClick={() => toggleMenu()}>
                    <PerspectiveText label="Menu" />
                </div>
                <div className="el bg-black" onClick={() => toggleMenu()}>
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>

        // <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden">
        //     <motion.div 
        //         className="relative w-full h-full"
        //         animate={{top: isActive ? "-100%" : "0%"}}
        //         transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        //     >
        //         <div 
        //             className={styles.el}
        //             onClick={() => {toggleMenu()}}
        //         >
        //             <PerspectiveText label="Menu"/>
        //         </div>
        //         <div 
        //             className={styles.el}
        //             onClick={() => {toggleMenu()}}
        //         >
        //             <PerspectiveText label="Close" />
        //         </div>
        //     </motion.div>
        // </div>
    )
}

function PerspectiveText({
    label
}: {
    label: string
}) {
    return (
        <div className="perspectiveText flex flex-col justify-center items-center h-full w-full transform-style-preserve-3d transition-transform duration-750 ease-in-out">
            <p className="transition-all duration-750 ease-in-out text-uppercase">
                {label}
            </p>
            <p className="absolute transform-origin-bottom-center transform rotate-x-90 translate-y-9 opacity-0 transition-all duration-750 ease-in-out">
                {label}
            </p>
        </div>


        // <div className={styles.perspectiveText}>
        //     <p>{label}</p>
        //     <p>{label}</p>
        // </div>
    )
}