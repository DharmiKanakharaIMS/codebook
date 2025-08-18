import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers/cartReducer"

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState)

export const CartProvider = ({children})=>
{
    const [state,dispatch] = useReducer(cartReducer,cartInitialState)

    function addtocart (product)
    {
       const updatedList = state.cartList.concat(product)
       const updatedTotal = state.total + product.price
        dispatch({
            type:"addToCart",
            payload:{
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    function removefromcart (product)
    {
       const updatedList = state.cartList.filter(item=> item.id !== product.id)
       const updatedTotal = state.total - product.price
        dispatch({
            type:"removeFromCart",
            payload:{
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    function clearcart ()
    {
       
        dispatch({
            type:"clearCart",
            payload:{
                products: [],
                total: 0
            }
        })
    }
    
    const value = {
        cartList: state.cartList,
        total: state.total,
        addtocart,
        removefromcart,
        clearcart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>
{
  return  useContext(CartContext)
}