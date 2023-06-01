// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'


const Card = () => {
    const [pelicula, setPelicula] = useState("");
    const [actor, setActor] = useState("");
    const [error, setError] = useState(false);
    const [valido, setValido] = useState(false);
    
    const onChangePelicula = (e) => setPelicula(e.target.value)
    
    const onChangeActor = (e) => setActor(e.target.value)
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (pelicula.trim().length < 3 || pelicula.trim().startsWith(' ') || actor.trim().length < 6) {
            setError(true);
            setValido(false);
        } else {
            setError(false);
            setValido(true);
        }
    }
    
    return (
    <div>
        <h2>Indique la Pelicula y el interprete</h2>
        <form onSubmit={onSubmitForm}>
            <input type="text" placeholder='Nombre de la pelicula' value={pelicula} onChange={onChangePelicula} />
            <input type="text" placeholder='Nombre del Actor' value={actor} onChange={onChangeActor}/>
            <button type='submit'>Enviar</button>
        </form>
        {error && <p>Algun dato no es válido</p>}
        {valido && !error && <Card pelicula={pelicula} actor={actor} />}
    </div>
  )
}

export default Card