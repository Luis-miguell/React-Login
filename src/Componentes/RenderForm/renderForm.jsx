import "./renderForm.css"
import { elTodoContext } from "../contexto"
import { useContext } from "react"
function Render(){

    const {datos, setRender} = useContext(elTodoContext)

    const ocultar = () => {
        setRender(false)
    }

    return(
        
        <div className="divRender">
            <h2>Confirmación</h2>
            <div>
                <p>Nombre: <span>{datos.nombre}</span></p>
                <p>Apellido: <span>{datos.apellido}</span></p>
                <p>Correo electronico: <span>{datos.correo}</span></p>
                <p>Contraseña: <span>{"*".repeat(datos.pass.length)}</span></p>
                <p>Género: <span>{datos.gen}</span></p>
            </div>
            <button onClick={ocultar}>Ocultar</button>
        </div>

    )

}

export default Render;