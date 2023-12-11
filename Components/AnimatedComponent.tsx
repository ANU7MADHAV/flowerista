"use client";
import { motion } from "framer-motion";

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, x: 50, y: 70 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Home page</h1>
    </motion.div>
  );
};

export default AnimatedComponent;
