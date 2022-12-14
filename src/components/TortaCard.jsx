import "../estilos.css/TortaCard.css";

import { TortaItem } from "./TortaItem";
export const TortaCard = (torta) => {
  return (
    <>
      <TortaItem key={torta.id} {...torta} />
    </>
  );
};
