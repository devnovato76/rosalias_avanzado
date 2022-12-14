import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { SeccionEspecial } from "./SeccionEspecial";
import { SeccionEventos } from "./SeccionEventos";
import { SeccionHelado } from "./SeccionHelado";
import { SeccionLugar } from "./SeccionLugar";
import { SeccionPostres } from "./SeccionPostres";
import { SeccionSabores } from "./SeccionSabores";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SeccionSabores />
      <SeccionEspecial />
      <SeccionLugar />
      <SeccionEventos />
      <SeccionPostres />
      <SeccionHelado />
      <Footer />
    </>
  );
};
