import { NavLink } from "react-router-dom";
import "../estilos.css/Footer.css";

export const Footer = () => {
  return (
    <>
      {/*<!-- Footer -->*/}
      <footer>
        <div className="grid container-center">
          <div className="items">
            <h2>Direccion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore saepe fugit quod maxime corrupti eligendi explicabo facere
              facilis hic, laborum expedita a. Vitae, eveniet esse maiores
              tempore officiis et.
            </p>
          </div>

          <div className="items">
            <h2>Enlaces</h2>
            <ul>
              <li>
                <a href="#">Helados</a>
              </li>
              <li>
                <a href="#">Tortas</a>
              </li>
              <li>
                <a href="#">Dulces</a>
              </li>
              <li>
                <a href="#">Postres</a>
              </li>
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Contactanos</a>
              </li>
              <li>
                <a href="#">Nuestro menú</a>
              </li>
              <li>
                <a href="#">Delivery y envíos</a>
              </li>
              <li>
                <a href="#">Empleos</a>
              </li>
            </ul>
          </div>

          <div className="items">
            <h2>Horario</h2>
            <p>
              Todos los dias <br />
              10AM - 8PM
            </p>
          </div>

          <div className="items">
            <div>
              <h2>Contacto</h2>
              <p>
                info@misitio.com <br />
                Tel: 914-123-456
              </p>
            </div>

            <div className="sociales">
              <NavLink to="#" className="fab fa-facebook-f"></NavLink>
              <NavLink to="#" className="fab fa-twitter"></NavLink>
              <NavLink to="#" className="fab fa-instagram"></NavLink>
            </div>
          </div>

          <div className="items subs">
            <h2>Subscribete</h2>
            <input type="text" placeholder="Ingrese su email" />
            <button className="btn dark">Enviar</button>
          </div>
        </div>
      </footer>

      {/*<!-- Footer copy -->*/}
      <div className="copy">
        <p>© 2022. All Rights Reserved</p>
      </div>
    </>
  );
};
