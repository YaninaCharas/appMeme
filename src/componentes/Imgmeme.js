import React, { useState } from "react";
import pp1 from "../img/1.jpg";

const Imgmeme = () => {
  const [textmeme, setTextmeme] = useState();
  const [imgmeme, setImgmeme] = useState();

  const textomeme = (e) => {
    setTextmeme(e.target.value);
  };

  const seleccionarImg = (e) => {
    setImgmeme(e.target.value);
  };

  return (
    <div>
      <h1 className="mt-5 mb-3 text-light ">Editá tu propio meme</h1>
      <h2 className="mt-2 mb-3">Escribí tu frase</h2>

      <input
        onChange={textomeme}
        className=""
        type="text"
        placeholder="Ingresa tu texto"
        name="meme"
      />

      <h2 className="mt-2 mb-3">Elegi la Imagen de tu meme</h2>

      <select
        onChange={seleccionarImg}
        className="form-select form-select-lg mb-3 w-50 m-auto"
        aria-label="Default select example"
      >
        <option>Selecciona una imagen</option>
        <option value={1}>Sol</option>
        <option value={2}>Montaña</option>
        <option value={3}>Rio</option>
      </select>
      <img src={pp1} />

      <figure className="text-center">
        <p className="mt-2 h1 text-center">{textmeme}</p>
        <img src={`../img/${imgmeme}.jpg`} alt="ppe2" />
      </figure>
    </div>
  );
};

export default Imgmeme;
