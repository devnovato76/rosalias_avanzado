import { TortasPesonalizadasList } from "./TortasPesonalizadasList";
import "../estilos.css/TortaCard.css";

export const TortasPersonalizadas = ({ tipo }) => {
  return (
    <>
      <h1>TARTAS PERSONALIZADA</h1>
      <hr />
      <div className="container">
        <TortasPesonalizadasList tipo="personalizada" />
      </div>
    </>
  );
};
