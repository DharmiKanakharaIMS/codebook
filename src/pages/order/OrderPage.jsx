import React from 'react'
import OrderSuccess from './OrderSuccess'
import OrderFail from './OrderFail'
import {  useLocation } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

function OrderPage() {
  const {state} = useLocation()
  useTitle(`Order Summary`)
  return (
    <main>
      {
        state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>
      }
    </main>
  )
}

export default OrderPage