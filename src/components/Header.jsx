import { motion } from "framer-motion";
import "../estilos.css/Header.css";

const variantsH3 = {
  hidden: { opacity: 0, y: -1500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      delay: 2.5,
      type: "spring",
      stiffness: 50,
    },
  },
};
const variantsH2 = {
  hidden: { opacity: 0, x: -500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 2.5,
      type: "spring",
      stiffness: 50,
    },
  },
};
const variantsBtn = {
  hidden: { opacity: 0, y: +200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 1.5,
      type: "spring",
      stiffness: 100,
    },
  },
};
const variantsH1 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 2.5,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const Header = () => {
  return (
    <header>
      <div className="grid container-center">
        <div className="text-content full">
          <motion.h3 initial="hidden" animate="visible" variants={variantsH3}>
            #Rosaliascakes
          </motion.h3>
          <motion.h2 initial="hidden" animate="visible" variants={variantsH2}>
            Artesanales
          </motion.h2>
          <motion.h1 initial="hidden" animate="visible" variants={variantsH1}>
            Tartas
          </motion.h1>
          <motion.button
            className="btn light"
            initial="hidden"
            animate="visible"
            variants={variantsBtn}
          >
            Menú
          </motion.button>
        </div>
      </div>
    </header>
  );
};
