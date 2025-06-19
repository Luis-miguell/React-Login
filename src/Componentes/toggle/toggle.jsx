import { useContext} from "react";
import { elTodoContext } from "../contexto";
import "./toggle.css"
function Toggle(/* {modo, setModo} */){

    const {modo, setModo} = useContext(elTodoContext);

    const changeMode = () => {
        setModo(!modo)
    }

    return(

        <>
        
            <div className={`toggleF ${modo && "oscuro"}`} onClick={changeMode}>
                <div>
                </div>
            </div>
        
        </>

    )

}

export default Toggle;