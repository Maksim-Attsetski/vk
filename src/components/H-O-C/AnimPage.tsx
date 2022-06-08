import {motion} from 'framer-motion';
import React, {FC} from 'react';

interface IProps {
    children: React.ReactNode,
    className?: string
}

const AnimPage: FC<IProps> = ({children, className}) => {

    const animPage = {
        initial: {
            opacity: 0.4, x: 70,
        },
        animate: {
            opacity: 1, x: 0,
        },
        transition: {
            type: "spring", stiffness: 100
        }
    }

    return (
        <motion.div
            className={`${className} container`}
            initial={animPage.initial}
            animate={animPage.animate}
            transition={animPage.transition}
        >
            {children}
        </motion.div>
    );
};

export default AnimPage;