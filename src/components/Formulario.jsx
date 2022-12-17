import emailjs from "@emailjs/browser";

import { useState } from "react";

import "../estilos.css/Formulario.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export const Formulario = () => {
  const [selectOpciones, setSelectOpciones] = useState("");
  const [selectOpciones2, setSelectOpciones2] = useState("");
  const [textarea, setTextarea] = useState("Escribe tu Comentario");
  const notify = () =>
    toast.success("ENVIADO CORRECTAMENTE", {
      position: toast.POSITION.TOP_CENTER,
    });
  const notifyError = () =>
    toast.error("SE HA PRODUCIDO UN ERROR", {
      position: toast.POSITION.TOP_CENTER,
    });
  const handleSelectChange = ({ value }) => {
    setSelectOpciones(value);
  };
  const handleTextareaChange = ({ value }) => {
    setTextarea(value);
  };
  const handleSelectChange2 = ({ value }) => {
    setSelectOpciones2(value);
  };
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_8qzly66",
        "template_bzvmnla",
        event.target,
        "yRpgIEgckQMF4IBHE"
      )
      .then((response) =>
        console.log("SUCCESS!", response.status, response.text)
      )
      .then(notify())
      .catch((error) => console.log("FAILED...", error));

    event.target.reset();
  };

  return (
    <div className="body">
      <div className="contenedor1">
        <h1 id="title">PRESUPUESTO</h1>
        <p id="description">Pedido de Presupuesto</p>
        <form id="survey-form" onSubmit={sendEmail}>
          <fieldset>
            <label id="name-label" htmlFor="nombre">
              Nombre
            </label>
            <br />
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="Escribe tu nombre"
              required={true}
            />{" "}
            <br />
            <label id="email-label" htmlFor="email">
              Email:
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu email"
              required={true}
            />
            <br />
            <label id="phone-label" htmlFor="phone">
              Telefono:
            </label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Escribe tu telefono"
              required={true}
            />
            <br />
            <label id="tipo-label" htmlFor="tipo">
              Tipo
            </label>
            <br />
            <select
              onChange={handleSelectChange}
              id="dropdown"
              name="tipo"
              defaultValue="personalizada"
            >
              <option value="personalizada">Personalizada</option>
              <option value="tradicional">Tradicional</option>
              <option value="pastelitos">Pastelitos</option>
            </select>
            <br />
            <br />
            <label id="tamaño-label" htmlFor="tamanio">
              Tamaño
            </label>
            <br />
            <select
              onChange={handleSelectChange2}
              id="dropdown2"
              name="tamanio"
              defaultValue="veinte"
            >
              <option value="diez">10 Personas Aproximadamente</option>
              <option value="veinte">20 Personas Aproximadamente</option>
              <option value="treinta">30 Personas Aproximadamente</option>
              <option value="otro">Otro</option>
            </select>
            <br />
            <br />
            <div className="caja">
              {" "}
              <div className="checkbox1">
                <label className="bizcocho">Elije un Bizcocho</label>
                <br />
                <input
                  type="checkbox"
                  id="vainilla"
                  name="bizcocho"
                  value="vainilla"
                />
                <label htmlFor="vainilla">Vainilla</label>
                <br />
                <input
                  type="checkbox"
                  id="chocolate"
                  name="bizcocho"
                  value="chocolate"
                />
                <label htmlFor="chocolate">Chocolate</label>
                <br />
                <input
                  type="checkbox"
                  id="redvelvet"
                  name="bizcocho"
                  value="redvelvet"
                />
                <label htmlFor="redvelvet">Redvelvet</label>
                <br />
                <input
                  type="checkbox"
                  id="carrotcake"
                  name="bizcocho"
                  value="carrotcake"
                />
                <label htmlFor="carrotcake">Carrotcake</label>
                <br />
                <input type="checkbox" id="otro" name="bizcocho" value="otro" />
                <label htmlFor="otro">Otro</label>
                <br />
              </div>
              <div className="checkbox1">
                {" "}
                <label className="relleno">Elije un Relleno</label>
                <br />
                <input type="checkbox" id="nata" name="relleno" value="nata" />
                <label htmlFor="nata">Nata</label>
                <br />
                <input
                  type="checkbox"
                  id="dulcedeleche"
                  name="relleno"
                  value="dulcedeleche"
                />
                <label htmlFor="dulcedeleche">Dulce de Leche</label>
                <br />
                <input type="checkbox" id="oreo" name="relleno" value="oreo" />
                <label htmlFor="oreo">Oreo</label>
                <br />
                <input
                  type="checkbox"
                  id="trufa"
                  name="relleno"
                  value="trufa"
                />
                <label htmlFor="trufa">Trufa</label>
                <br />
                <input
                  type="checkbox"
                  id="otro2"
                  name="bizcocho"
                  value="otro"
                />
                <label htmlFor="otro">Otro</label>
              </div>
              <br />
            </div>
            <label className="comentario" htmlFor="comentario">
              Comentario:
            </label>
            <br />
            <textarea
              onChange={setTextarea}
              id="comentario"
              name="comentario"
              rows="12"
              cols="60"
              defaultValue="Escribe tu Comentario"
            ></textarea>
            <br />
            <br />
            <input
              id="submit"
              type="submit"
              formnovalid="formnovalidate"
              value="Enviar"
            />
          </fieldset>
        </form>
        <br />
      </div>
      {/*<button onClick={notify}>Toast</button>*/}
      <ToastContainer />
    </div>
  );
};
