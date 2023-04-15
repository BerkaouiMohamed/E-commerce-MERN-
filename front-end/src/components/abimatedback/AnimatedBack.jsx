import { motion } from "framer-motion";

const wavePathVariants = {
  initial: {
    pathLength: 0,
    pathOffset: 1,
  },
  animate: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const Wave = () => {
  return (
    <motion.svg className='absolute  top-1/3'
      viewBox="0 0 2000 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
  
     <motion.path
  d="M0 100 C200 20, 400 30, 600 100 S1000 180, 1200 100 S1400 20, 1600 100 S1800 180, 2000 100"
  stroke="white"
  strokeWidth="4"
  strokeLinecap="round"
  fill="none"
  variants={wavePathVariants}
  initial="initial"
  animate="animate"
      />
      
            <motion.path
        d="M0 50 c 160 -50 320 50 480 0 c 160 -50 320 50 480 0 c 160 -50 320 50 480 0 c 160 -50 320 50 480 0 c 160 -50 320 50 480 0"
        variants={wavePathVariants}
        initial="initial"
        animate="animate"
        strokeWidth="4"
        stroke="white"
      />
    </motion.svg>
  );
};

export default  Wave
