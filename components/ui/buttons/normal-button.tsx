'use client'

import { useRouter }  from "next/navigation";


interface NormalButtonProps {
    label: string,
    href: string
}

const NormalButton = ({
    label,
    href
}: NormalButtonProps) => {
    const router = useRouter();

    return ( 
        <div className="customButton">
                <div
                    className="el"
                    onClick={() => router.push(href)}
                >
                    <PerspectiveText label={label} />
                </div>
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