import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../estilos.css/Nav.css";

const variantsNav = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delay: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};
const variantsDivLinks = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 1,
      type: "spring",
      stiffness: 30,
    },
  },
};
const variantsDivLinks2 = {
  hidden: { opacity: 0, x: +300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 1,
      type: "spring",
      stiffness: 30,
    },
  },
};

export const Navbar = () => {
  return (
    <motion.nav initial="hidden" animate="visible" variants={variantsNav}>
      <div className="grid container-center">
        <motion.div className="enlaces" variants={variantsDivLinks}>
          <a href="#">Inicio</a>
          <a href="#sabores">Sabores</a>
          <a href="#productos">Productos</a>
          <a href="#lugar">Nosotros</a>
        </motion.div>

        <motion.div className="sociales" variants={variantsDivLinks2}>
          <NavLink to="#" className="fab fa-facebook-f"></NavLink>
          <NavLink to="#" className="fab fa-twitter"></NavLink>
          <NavLink to="#" className="fab fa-instagram"></NavLink>
        </motion.div>
      </div>
    </motion.nav>
  );
};
