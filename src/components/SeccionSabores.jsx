import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../estilos.css/SeccionSabores.css";

const variantsSabores = {
  hidden: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 1,
      type: "spring",
      stiffness: 40,
    },
  },
  viewport: {
    once: true,
  },
};
const variantsSaboresBtn = {
  hidden: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
      type: "spring",
      stiffness: 40,
    },
  },
  viewport: {
    once: true,
  },
};

export const SeccionSabores = () => {
  //const scrollRef = useRef(null);
  return (
    <section className="sabores" id="sabores">
      <div className="grid">
        <div className="span6 background"></div>

        <div className="span6">
          <div className="text-content lateral">
            <motion.h1
              initial="hidden"
              whileInView="whileInView"
              variants={variantsSabores}
            >
              NUESTROS SABORES
            </motion.h1>
            <h3>¡Frescos y sabrosos!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              enim, deserunt id eum, dignissimos illo assumenda, voluptatum
              similique repellat praesentium tenetur non sint expedita itaque
              voluptatem aperiam a ut fugiat!
            </p>
            <Link to={"personalizada"}>
              <motion.button
                className="btn dark"
                initial="hidden"
                whileInView="whileInView"
                variants={variantsSaboresBtn}
              >
                Menú
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
