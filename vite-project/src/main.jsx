import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from "./Hello"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <>
 <Hello/>
 <h3> How are u</h3> 
    <App />
 </>
)
