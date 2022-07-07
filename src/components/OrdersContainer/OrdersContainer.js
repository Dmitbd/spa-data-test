import React from 'react'
import Order from '../Order/Order'
import container from './OrdersContainer.module.css'
import { Link } from 'react-router-dom'

const OrdersContainer = ({ orders, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className={container.container}>
      <div className={container.header}>
        <p className={container.numberDate}>Номер / Дата</p>
        <p className={container.orderTypeAutor}>Тип задания / Автор</p>
        <p className={container.accountTerminal}>Аккаунт / Терминал</p>
        <p className={container.status}>Статус</p>
      </div>
      <ul className={container.orders}>
        {
          orders?.map(order => (
            <Link className={container.orderLink} key={order.orderId} to={`/${order.orderId}`}>
              <Order
                orderId={order.orderId}
                createdDate={order.createdDate}
                orderType={order.orderType}
                clientName={order.clientName}
                account={order.account}
                terminal={order.terminal}
                orderStatus={order.orderStatus}
              />
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default OrdersContainer
