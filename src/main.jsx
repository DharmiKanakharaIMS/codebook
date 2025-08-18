import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom'
import {ScrollToTop} from './components'
import FilterProvider from './context/FilterContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import  {CartProvider}  from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ScrollToTop/>
   <CartProvider>
     <FilterProvider>
    <ToastContainer  closeButton={false} autoClose={3000} />
        <App />
    </FilterProvider>
   </CartProvider>
    </BrowserRouter>
)
