import { useContext} from 'react';
import './App.css'
import Formulario from './Componentes/Formulario/formuario';
import Render from './Componentes/RenderForm/renderForm';
import Toggle from './Componentes/toggle/toggle';
import { elTodoContext } from './Componentes/contexto';

function App() {

    const {render} = useContext(elTodoContext)

    return(
            <>
                <div className='elTodo'>
                    <Formulario/>
                    {render && <Render/>}
                </div>
                <Toggle />
            </>
        
    )

}

export default App;