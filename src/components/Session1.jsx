import React from 'react'
import '../components/session1.scss'
import Imagensession from '../imginfo.png'
import Colaboraciones from '../colaboradores.png'


const Session1 = () => {
return (
<div className='contenedor-sesscion1-general'>
    <div className='contenedor-session1'>
        <div className='contenedor-information'>
            <h1 className='title-b'>Slack es tu sede digital</h1>
            <p className='description-b'>
                Transforma la manera en que trabajas con un lugar para todos y todo lo que necesitas para realizar las
                tareas.
            </p>
            <button className='boton-probar-gratis'><i class="fa-solid fa-user-check"></i> PROBAR GRATIS</button>
            <button className='boton-registrarse-google'><i class="fa-brands fa-google"></i> REGISTRARSE CON
                GOOGLE</button>
        </div>
        <div className='contenedor-img'>
            <img className='img-container' src={Imagensession}></img>
        </div>
    </div>
    <div className='contenedor-colaboraciones'>
        <img src={Colaboraciones}></img>
    </div>
</div>
)
}

export default Session1