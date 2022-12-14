import { getTortaBytipo } from "../helpers/getTortaByTipo";
import { useMemo } from "react";
import { TortaCard } from "./TortaCard";

export const TortasPesonalizadasList = ({ tipo }) => {
  const tortas = useMemo(() => getTortaBytipo(tipo), [tipo]);
  return (
    <>
      {tortas.map((torta) => (
        <TortaCard key={torta.id} {...torta} />
      ))}
    </>
  );
};
