import { useMemo } from "react";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getTortaById } from "../helpers";
import "../estilos.css/TortaPage.css";

export const TortaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const torta = useMemo(() => getTortaById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!torta) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="contenedor">
      <div className="contenedorImg">
        <img
          src={`/assets/tortas/${id}.jpg`}
          alt={torta.nombre}
          className="img"
        />
      </div>
      <div className="contenedorText">
        <h3>{torta.nombre}</h3>
        <ul className="list-group">
          <li className="list-item">
            <b>Bizcocho:</b>
            {torta.bizcocho}
          </li>
          <li className="list-group-item">
            <b>Tipo:</b>
            {torta.tipo}
          </li>
          <li className="list-group-item">
            <b>Relleno:</b>
            {torta.relleno}
          </li>
          <li className="list-group-item">
            <b>Cobertura:</b>
            {torta.cubierta}
          </li>
          <li className="list-group-item">
            <b>pisos:</b>
            {torta.pisos}
          </li>
          <li className="list-group-item">
            <b>tamaño:</b>
            {torta.tamaño}
            Personas Aprox
          </li>
        </ul>

        <h4>Descripción</h4>
        <p className="description">{torta.description}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
        <Link to={"formulario"}>
          <button id="presupuesto" className="btn btn-outline-primary">
            Presupuesto
          </button>
        </Link>
      </div>
    </div>
  );
};
