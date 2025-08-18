import { useEffect, useState } from 'react'
import DashboardCard from './DashboardCard'
import DashboardEmpty from './DashboardEmpty'
import { getUserOrders } from '../../services/dataService'
import useTitle from '../../hooks/useTitle'
import { toast } from 'react-toastify'

function Dashboard() {
 const [orders, setorders] = useState([])
  useTitle('Dashboard')
  useEffect(()=>{
    const fetchOrders = async() =>
    {
            try {
              const data = await getUserOrders()            
              setorders(data)
            } catch (error) {
              toast.error(error.message,{position: "top-center"})
            }
    }
    fetchOrders()
  },[])
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
        {
          orders.length && orders.map((order)=>(
            <DashboardCard order={order} key={order.id}/>
          ))
        }
      </section>
        <section>
           { !orders.length && <DashboardEmpty/>}
        </section>
    </main>
  )
}

export default Dashboard