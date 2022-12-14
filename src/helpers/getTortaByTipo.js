import { tortas } from "../data/tortas";

export const getTortaBytipo = (tipo) => {
  const validtipos = ["personalizada", "tradicional"];
  if (!validtipos.includes(tipo)) {
    throw new Error(`${tipo} is not a valid tipo`);
  }

  return tortas.filter((torta) => torta.tipo === tipo);
};
