import "../estilos.css/Lugar.css";

export const SeccionLugar = () => {
  return (
    <section className="lugar" id="lugar">
      <div className="grid">
        <div className="span6">
          <div className="text-content lateral">
            <h1>Nuestro lugar</h1>
            <h3>¡Helado frente al mar!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              enim, deserunt id eum, dignissimos illo assumenda, voluptatum
              similique repellat praesentium tenetur non sint expedita itaque
              voluptatem aperiam a ut fugiat!
            </p>
            <button className="btn dark">Leer más</button>
          </div>
        </div>

        <div className="span6 background"></div>
      </div>
    </section>
  );
};
