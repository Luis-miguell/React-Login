import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ElTodoProvider from './Componentes/contexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ElTodoProvider>
      <App />
    </ElTodoProvider>
  </StrictMode>,
)