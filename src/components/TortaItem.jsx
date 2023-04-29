import { Link } from "react-router-dom";

import "../estilos.css/TortaItem.css";

export const TortaItem = ({
  id,
  nombre,
  tipo,
  relleno,
  tamaño,
  bizcocho,
  pisos,
  cubierta,
}) => {
  const tortaImageUrl = `../public/assetsPublicos/assets/tortas/${id}.jpg`;
  return (
    <>
      <div className="gallery__item">
        <Link to={`/torta/${id}`}>
          <img className="gallery__img" src={tortaImageUrl} alt={nombre} />
          <h2 className="gallery__title">{nombre}</h2>
        </Link>
      </div>
    </>
  );
};
