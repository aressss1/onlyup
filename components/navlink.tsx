import { footerLinks, links, perspective, slideIn } from '@/content';

import { motion } from 'framer-motion';

export default function Navlink() {
  return (
    <div className="nav">
       <div className="body">
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className="linkContainer">
                        <motion.div
                        //   href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a>
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className="footer">
            {
                footerLinks.map( (link, i) => {
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
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}