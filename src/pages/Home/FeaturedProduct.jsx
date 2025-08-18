import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components'
import { getFeaturedList } from '../../services'
import { toast } from 'react-toastify'

function FeaturedProduct() {

  const [products,setproducts] = useState([])
  useEffect(()=>{
    async function fetchproducts()
    {   
      try {
        const data = await getFeaturedList()
        setproducts(data)        
      } catch (error) {
        toast.error(error.message,{position: "top-center"})
      }
    }
    fetchproducts()
  },[])

  return (
     <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">

          {
            products.map((product)=>(
              <ProductCard product={product} key={product.id}/>
            ))
          }
        </div>
    </section>
  )
}

export default FeaturedProduct