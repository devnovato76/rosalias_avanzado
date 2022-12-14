import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Formulario } from "./components/Formulario";

//import { GaleriaImagenes } from "./components/GaleriaImagenes";

import { Home } from "./components/Home";
import { SeccionEventos } from "./components/SeccionEventos";
import { SeccionLugar } from "./components/SeccionLugar";
import { SeccionSabores } from "./components/SeccionSabores";
import { TortaPage } from "./components/TortaPage";
import { TortasPersonalizadas } from "./components/TortasPersonalizadas";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sabores" element={<SeccionSabores />} />
          <Route path="/productos" element={<SeccionEventos />} />
          <Route path="/lugar" element={<SeccionLugar />} />
          {/*<Route path="/galeria" element={<Galeria></Galeria>}></Route>*/}
          {/*<Route path="/galeria" element={<GaleriaImagenes />}></Route>*/}
          <Route path="/personalizada" element={<TortasPersonalizadas />} />
          <Route path="torta/:id/formulario" element={<Formulario />} />
          <Route path="torta/:id" element={<TortaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
