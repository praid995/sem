import React from "react";
import { motion } from "framer-motion";
// Вставьте определения анимаций прямо в этот файл, если файла animations.tsx нет рядом:

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
};

const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
};

const slideRight = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const AnimationDemo: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ background: "lightblue", padding: "20px", marginBottom: "20px" }}
      >
        Fade In Animation
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUp}
        style={{ background: "lightgreen", padding: "20px", marginBottom: "20px" }}
      >
        Slide Up Animation
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={zoomIn}
        style={{ background: "lightcoral", padding: "20px", marginBottom: "20px" }}
      >
        Zoom In Animation
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideRight}
        style={{ background: "lightgoldenrodyellow", padding: "20px", marginBottom: "20px" }}
      >
        Slide Right Animation
      </motion.div>
    </div>
  );
};

export default AnimationDemo;