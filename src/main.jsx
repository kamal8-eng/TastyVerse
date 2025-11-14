import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './contexts/CartContext.jsx'
import NotAllowed from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<>
    <CartProvider >
      <App />
    </CartProvider>
    <NotAllowed/>
</>
  </StrictMode>,
)
