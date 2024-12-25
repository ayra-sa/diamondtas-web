// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
    //   x: "-100vw",
    },
    animate: {
      opacity: 1,
    //   x: 0,
      transition: { duration: 0.6 }, // Durasi transisi
    },
    exit: {
      opacity: 0,
    //   x: "100vw",
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
