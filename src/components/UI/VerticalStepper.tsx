import React from "react";
import { motion } from "framer-motion";

const steps = [1, 2, 3, 4];

const VerticalStepper = () => {
  return (
    <div className="flex flex-col items-center py-16">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Step Circle */}
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-blue-500 text-lg font-bold text-black shadow-md"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {step}
          </motion.div>

          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <motion.div
              className="w-1 bg-blue-500"
              style={{ height: "80px" }} // Adjust line height here
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalStepper;
