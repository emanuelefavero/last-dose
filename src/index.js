import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { DoseProvider } from './context/DoseContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <DoseProvider>
            <App />
        </DoseProvider>
    </React.StrictMode>
)
