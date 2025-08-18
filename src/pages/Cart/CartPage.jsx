import { useCart } from "../../context/CartContext"
import useTitle from "../../hooks/useTitle"
import CartList from "./CartList"
import EmpyCart from "./EmpyCart"


function CartPage() {
  const {cartList}  = useCart()
  useTitle(`Cart (${cartList.length})`)
  return (
    <main>
      {cartList.length ? <CartList/> :<EmpyCart/> }
    </main>
  )
}

export default CartPage