import './index.css'
import ordersData from './data/orders.json'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import OrderPage from './pages/OrderPage/OrderPage'

const App = () => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const newOrdersData = []

    const dataFormat = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }

    ordersData.forEach(element => {
      newOrdersData.push({
        orderId: element.id,
        createdDate: new Date(element.created_date).toLocaleDateString("ru-RU", dataFormat).replace(',', ''),
        orderType: element.order_type.name,
        clientName: element.created_user.surname + ' ' + element.created_user.name[0] + '.' + element.created_user.patronymic[0] + '.',
        account: element.account.name,
        terminal: element.terminal.name,
        orderStatus: element.status
      })
    });

    const getOrders = () => {
      setLoading(true)
      setOrders(newOrdersData)
      setLoading(false)
    }

    getOrders()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<OrdersPage ordersData={ordersData} orders={orders} loading={loading} />} />
        {orders.map(router => {
          //роуты для заказов и якобы страница с заказом
          return <Route key={router.orderId} path={`/${router.orderId}`} element={<OrderPage router={router}/>}/>
        })}
        <Route path="*" element={<>not found</>} />
      </Routes>
    </div>
  )
}

export default App
