import { tortas } from "../data/tortas";

export const getTortaById = (id) => {
  return tortas.find((torta) => torta.id === id);
};
