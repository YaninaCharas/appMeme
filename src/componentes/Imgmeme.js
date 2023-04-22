import React, {useState} from 'react'
// import pp from "../componentes/img/1.png"

const Imgmeme = () => {
    const [textmeme, setTextmeme] = useState();
    const [imgmeme , setImgmeme] = useState();
    
    const textomeme = (e) => {
        setTextmeme(e.target.value);
        console.log(e.target.value);
    };

    const seleccionarImg = (e) =>{
        setImgmeme(e.target.value);
    }

    return (
        <div>
            <h1 className='mt-5 mb-3 text-light '>Editá tu propio meme</h1>
            <h2 className='mt-2 mb-3'>Escribí tu frase</h2>

            <input onChange={textomeme} className='' type='text' placeholder='Ingresa tu texto' name="meme" />

            <h2 className='mt-2 mb-3'>Elegi la Imagen de tu meme</h2>


            <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
                <option>Selecciona una imagen</option>
                <option value={1}>Sol</option>
                <option value={2}>Montaña</option>
                <option value={3}>Rio</option>
            </select>  

            <figure className="text-center"> 
                <p className='mt-2 h1 text-center'>{textmeme}</p>
                <img src="../img/2.png" alt="meme"/>
                <img src='../componentes/img/1.jpg' alt="meme2"/>
                <img src={`../componentes/img/${imgmeme}.png`} className='figure-img mt-3 d-block m-auto ' alt='meme3'/>
            </figure>

        </div>
    );
}

export default Imgmeme