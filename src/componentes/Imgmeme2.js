import React, { useState } from "react";
import html2canvas from "html2canvas";

const Imgmeme2 = () => {
    const [textmeme, setTextmeme] = useState();
    const [imgmeme, setImgmeme] = useState();
  
    const textomeme = (e) => {
      setTextmeme(e.target.value);
    };
  
    const seleccionarImg = (e) => {
      setImgmeme(e.target.value);
    };
  
    const descarga = (e) => {
      html2canvas(document.querySelector("#exportar")).then(function(canvas) {
        let img = canvas.toDataURL("img/png");
        let link = document.createElement("a");
        link.download = "memepropio.png";
        link.href = img;
        link.click();
    });
    }
  
    return (
      <div>
        <h1 className="mt-5 mb-3 text-light ">Editá tu propio meme</h1>
        <h2 className="mt-2 mb-3">Escribí tu frase</h2>
  
        <input
          onChange={textomeme}
          className="form-control w-25 m-auto d-block"
          type="text"
          placeholder="Ingresa tu texto"
          name="meme"
        />
  
        <h2 className="mt-2 mb-3">Elegi la Imagen de tu meme</h2>
        <select
          onChange={seleccionarImg}
          className="form-select form-select-lg mb-3 w-50 m-auto"
          aria-label="Default select example" >
          <option>Selecciona una imagen</option>
          <option value={4}>Bebe</option>
          <option value={5}>Niño</option>
          <option value={6}>Adulto</option>
        </select>
        <figure className="text-center" id='exportar'>
          <p className="mt-2 h1 text-center">{textmeme}</p>
          <img src={`../img/${imgmeme}.png`} alt="imagenMeme" />
        {/* <img src={imagen} alt="imagenMemefuera" />
          <img src="./img/1.png" alt="imagenMeme" /> */}
        </figure>
  
        <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Descargar meme</button>
  
      </div>
    );
}

export default Imgmeme2