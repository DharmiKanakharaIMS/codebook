export const cartReducer = (state,action) =>{
    const {type,payload} = action

    switch(type)
    {
        case "addToCart":
            return {...state,cartList: payload.products,total: payload.total}
        case "removeFromCart":
            return {...state,cartList: payload.products,total: payload.total}
        case "clearCart":
            return  {...state,cartList: payload.products,total: payload.total}
        default:
            return "No case found"
    }
}