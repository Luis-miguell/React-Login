import { useState } from "react";
import "./formulario.css";

function Formulario({modo, setDatos, setRender}){

    const changes = (e) => {
        setRender(false);
        const elemento = e.target
        setDatos( dates => ({...dates, [elemento.name]: elemento.value}) )
    }

    const enviarD = (e) => {
        e.preventDefault();
        setRender(true)
    }

    return(

        <div className="divForm">

            <h1>Login Básico</h1>
        
            <form onSubmit={enviarD} className={modo && "jaja"}>

                <label htmlFor="nombre">Nombre: </label>
                <input 
                type="text" 
                name="nombre" 
                id="nombre"
                required
                onChange={changes}
                />

                <label htmlFor="apellido">Apellido: </label>
                <input 
                type="text" 
                name="apellido" 
                id="apellido"
                required
                onChange={changes}
                />

                <label htmlFor="correo">Correo: </label>
                <input 
                type="email" 
                name="correo" 
                id="correo"
                required
                onChange={changes}
                />

                <label htmlFor="pass">Contraseña: </label>
                <input 
                type="password" 
                name="pass" 
                id="pass"
                required
                onChange={changes}
                />

                <label htmlFor="gen">Género: </label>
                <select 
                name="gen" 
                id="gen"
                onChange={changes}
                required
                >
                    <option value="0" selected disabled style={{display: "none"}}>Elige</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Tralalero Tralala">Tralalero Tralala</option>
                </select>

                <button>Enviar</button>

            </form>
        
        </div>

    )

}

export default Formulario;