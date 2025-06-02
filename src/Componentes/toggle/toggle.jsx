import { useState } from "react";
import "./toggle.css"
function Toggle({modo, setModo}){

    const [mode, setMode] = useState(false);

    const changeMode = () => {
        setMode(!mode)
        setModo(!modo)
    }

    return(

        <>
        
            <div className={`toggleF ${mode && "oscuro"}`} onClick={changeMode}>
                <div>
                </div>
            </div>
        
        </>

    )

}

export default Toggle;