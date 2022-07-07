import React from 'react'
import order from './Order.module.css'
import cn from 'classnames'

const Order = ({ orderId, createdDate, orderType, clientName, account, terminal, orderStatus }) => {

  const statusText = () => {

    if (orderStatus === 'new') {
      return (
        <p className={cn(order.statusText, order.colorRed)}>Новый</p>
      )
    }
    if (orderStatus === 'completed') {
      return (
        <p className={cn(order.statusText, order.colorGreen)}>Выполнен</p>
      )
    }
    if (orderStatus === 'started') {
      return (
        <p className={cn(order.statusText, order.colorBlue)}>Выполняется</p>
      )
    }
    if (orderStatus === 'declined') {
      return (
        <p className={cn(order.statusText, order.colorBlack)}>Отменен</p>
      )
    }
    if (orderStatus === 'assigned_to') {
      return (
        <p className={cn(order.statusText, order.colorYellow)}>Назначено</p>
      )
    }
  }

  return (
      <li className={order.container}>
        <div className={order.numberDate}>
          <p className={order.titleText}>&#8470;{orderId}</p>
          <p className={order.subtitleText}>{createdDate}</p>
        </div>
        <div className={order.orderTypeAuthor}>
          <p className={order.titleText}>{orderType}</p>
          <p className={order.subtitleText}>{clientName}</p>
        </div>
        <div className={order.accountTerminal}>
          <p className={order.titleText}>{account}</p>
          <p className={order.subtitleText}>{terminal}</p>
        </div>
        <div className={order.status}>
          {statusText()}
        </div>
      </li>
  )
}

export default Order
