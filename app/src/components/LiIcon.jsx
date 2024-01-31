import React from 'react'
import {motion, useScroll} from 'framer-motion'
const LiIcon = ({reference}) =>{
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset:["center end", "center center"]
        }
    )
    return (
        <figure className='absolute left-0 stroke-white'>
            <svg width="75" height = "75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r = "20" fill="white" className='stroke-orange-500 stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r = "20" fill="white" className='stroke-[5px] fill-black'
                style={{
                    pathLength : scrollYProgress
                }}/>
                <circle cx="75" cy="50" r = "10" fill="white" className='animate-pulse stroke-1 fill-orange-500'/>
            </svg>
        </figure>
    )
}

export default LiIcon;