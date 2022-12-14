import { tortas } from "../data/tortas";

export const getTortasByNombre = (name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return tortas.filter((torta) =>
    torta.nombre.toLocaleLowerCase().includes(name)
  );
};
