import { footerLinks, links, perspective, slideIn } from '@/content';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navlink() {
    return (
        <div className="nav">
            <div className="body">
                {
                    links.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className="linkContainer">
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <Link href={href} >
                                        <a>
                                            {title}
                                        </a>
                                    </Link>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div className="footer">
                {
                    footerLinks.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                <Link href={href} >
                                    {title}
                                </Link>
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}