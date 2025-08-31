import React from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-gradient-to-tr from-primary to-secondary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold text-white animate-pulse">
        Welcome to Rohith's Portfolio
      </h1>
    </motion.div>
  );
};

export default SplashScreen;
