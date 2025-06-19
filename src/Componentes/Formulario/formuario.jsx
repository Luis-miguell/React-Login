import { useContext } from "react";
import { elTodoContext } from "../contexto";
import "./formulario.css";

function Formulario(/* {setDatos, setRender,  datos} */){

    const {setDatos, setRender, datos} = useContext(elTodoContext);

    const changes = (e) => {
        setRender(false);
        const elemento = e.target
        setDatos( datos =>
            ({...datos, [elemento.name]: elemento.value.trim() ? elemento.value : "" })
        )
    }

    const enviarD = (e) => {
        e.preventDefault();
        setRender(true)
    }

    return(

        <div className="divForm">

            <h1>Login Básico</h1>
        
            <form onSubmit={enviarD}>

                <label htmlFor="nombre">Nombre: </label>
                <input 
                type="text" 
                name="nombre" 
                id="nombre"
                required
                onChange={changes}
                value={datos.nombre}
                />

                <label htmlFor="apellido">Apellido: </label>
                <input 
                type="text" 
                name="apellido" 
                id="apellido"
                required
                onChange={changes}
                value={datos.apellido}
                />

                <label htmlFor="correo">Correo: </label>
                <input 
                type="email" 
                name="correo" 
                id="correo"
                required
                onChange={changes}
                value={datos.correo}
                />

                <label htmlFor="pass">Contraseña: </label>
                <input 
                type="password" 
                name="pass" 
                id="pass"
                required
                onChange={changes}
                value={datos.pass}
                />

                <label htmlFor="gen">Género: </label>
                <select 
                name="gen" 
                id="gen"
                onChange={changes}
                required
                value={datos.gen}
                >
                    <option value="" defaultValue disabled style={{display: "none"}}>Elige</option>
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