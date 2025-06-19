import {createContext, useContext, useState, useEffect } from "react";
export const elTodoContext = createContext();

function ElTodoProvider({children}) {

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
        <elTodoContext.Provider value={{modo, setModo, render, setRender, datos, setDatos}}>
            {children}
        </elTodoContext.Provider>
    )

}

export default ElTodoProvider;
export const provider = () => useContext(elTodoContext);