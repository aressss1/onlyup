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
        <div className="customButton">
        <motion.div 
            className="slider"
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className="element"
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className="element"
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
    )
}

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