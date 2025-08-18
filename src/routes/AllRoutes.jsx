import { Route, Routes } from 'react-router-dom'
import {CartPage, Dashboard, Home,Login,OrderPage,PageNotFound,ProductDetail,Products, Register} from '../pages'
import ProtectedRoute from './ProtectedRoute'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        
        <Route path='cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
        <Route path='order-summary' element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
        <Route path='dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>

        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes