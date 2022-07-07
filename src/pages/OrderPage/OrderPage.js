import React from 'react'
import page from './OrderPage.module.css'

const OrderPage = (props) => {
  return (
    <div>
      <p className={page.order}>order - {props.router.orderId}</p>
    </div>
  )
}

export default OrderPage
