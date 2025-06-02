import { useEffect, useState } from 'react';
import './App.css'
import Formulario from './Componentes/Formulario/formuario';
import Render from './Componentes/RenderForm/renderForm';
import Toggle from './Componentes/toggle/toggle';

function App() {

    const [modo, setModo] = useState(false);
    const [render, setRender] = useState(false);
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        pass: "",
        gen: ""
    });

    useEffect(() => {
        if(modo){
            document.body.classList.add("bodyOscuro");
        } else {
            document.body.classList.remove("bodyOscuro");
        }
    }, [modo])

    return(
        <>
        <div className='elTodo'>
            <Formulario datos={datos} setDatos={setDatos} setRender={setRender}/>
            {render && <Render datos={datos} setRender={setRender} />}
        </div>
        <Toggle modo={modo} setModo={setModo}/>
        </>
        
    )

}

export default App;