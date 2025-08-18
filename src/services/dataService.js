function getSession() {
    const id = JSON.parse(sessionStorage.getItem("cbid"))
    const token = JSON.parse(sessionStorage.getItem("token"))
    return {token: token,id:id}
}

export async function getUser() {
    const {token,id} = getSession()

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/600/users/${id}`,{
            method:"GET",
            headers:{"Content-Type":"application/json",
            Authorization: `Bearer ${token}`}
    })
    if(!res.ok)
    {
        throw {
            message: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}
export async function getUserOrders() {
    const {token,id} = getSession()
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/660/orders?user.id=${id}`,{
                method:"GET",
                headers:{"Content-Type":"application/json",Authorization: `Bearer ${token}`}
            })
    if(!res.ok)
    {
        throw {
            message: res.statusText,
            status: res.status
        }
    }
            const data = await res.json()
            return data
}
export async function createOrder(cartList,total,user) {
    const {token} = getSession()
    const order = {
            cartList: cartList,
            amountPaid:total,
            quantity:cartList.length,
            user:{
                name: user.name,
                email: user.email,
                id: user.id
            }
        }
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/660/orders`,{
            method:"POST",
            headers:{"Content-Type":"application/json",Authorization: `Bearer ${token}`},
            body: JSON.stringify(order)
        })
    if(!res.ok)
    {
        throw {
            message: res.statusText,
            status: res.status
        }
    }
        const data = await res.json()
        return data
}