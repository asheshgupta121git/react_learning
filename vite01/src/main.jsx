import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Hello(){
  return(
    <h1>hello G!</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
    <App/>
  </StrictMode>,
)
