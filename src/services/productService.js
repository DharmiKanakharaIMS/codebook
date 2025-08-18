export async function getProductList()
{
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/444/products`);
    if(!response.ok)
    {
        throw {
            message: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data
}
export async function getProduct(id)
{
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/444/products/?id=${id}`)
    if(!response.ok)
    {
        throw {
            message: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data
}
export async function getFeaturedList()
{
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/444/featured_products`)
    if(!response.ok)
    {
        throw {
            message: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data
}