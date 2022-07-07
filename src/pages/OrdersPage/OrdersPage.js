import React, { useState } from 'react'
import OrdersContainer from '../../components/OrdersContainer/OrdersContainer'
import Pagination from '../../components/Pagination/Pagination'

const OrdersPage = ({orders, loading}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [ordersPerPage, setOrdersPerPage] = useState(10)

  const lastOrderIndex = currentPage * ordersPerPage
  const firstOrderIndex = lastOrderIndex - ordersPerPage
  const currentOrder = orders?.slice(firstOrderIndex, lastOrderIndex)

  return (
    <div>
      <OrdersContainer orders={currentOrder} loading={loading} />
      <Pagination
        orders={orders} ordersPerPage={ordersPerPage}
        currentPage={currentPage} setCurrentPage={setCurrentPage}
        firstOrderIndex={firstOrderIndex} lastOrderIndex={lastOrderIndex}
        setOrdersPerPage={setOrdersPerPage}
      />
    </div>
  )
}

export default OrdersPage
