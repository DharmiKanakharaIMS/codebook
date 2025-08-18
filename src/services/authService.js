export const login = async (authDetail) =>
{
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`,{
      method:"POST",
      headers:{ "content-Type": "application/json" },
      body: JSON.stringify(authDetail)
    })
    if(!response.ok)
    {
        throw {
            message: response.statusText,
            status: response.status
        }
    }
     const data = await response.json();    

    if(data.accessToken)
      {
        sessionStorage.setItem("token",JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid",JSON.stringify(data.user.id))
      }
    return data
}

export const register = async (authDetail) =>{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/register`, {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(authDetail),
        });
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

export const logout = () =>
{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cbid")
}