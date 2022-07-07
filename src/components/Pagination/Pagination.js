import React, { useState } from 'react'
import DropDownContainer from '../DropDownContainer/DropDownContainer'
import pagination from './Pagination.module.css'
import cn from 'classnames'

const Pagination = ({ orders, ordersPerPage, currentPage, setCurrentPage,
  firstOrderIndex, lastOrderIndex, setOrdersPerPage }) => {

  const isNextPage = currentPage !== orders.length / ordersPerPage
  const isPrevPage = currentPage !== 1

  const nextPage = () => {
    if (isNextPage) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (isPrevPage) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const firstPage = () => {
    setCurrentPage(1)
  }

  const lastPage = () => {
    setCurrentPage(orders.length / ordersPerPage)
  }

  return (
    <div className={pagination.container}>
      <p className={cn(pagination.text, pagination.records)}>записи {firstOrderIndex + 1}-{lastOrderIndex}</p>
      <div className={pagination.buttonsContainer}>
        <button className={cn(pagination.dubleArrow, pagination.button, isPrevPage ? pagination.blue : pagination.white)} onClick={() => firstPage()}>&#171;</button>
        <button className={cn(pagination.oneArrow, pagination.button, isPrevPage ? pagination.blue : pagination.white)} onClick={() => prevPage()}>&#8249;</button>
        <p className={pagination.pageNumber}>{currentPage}</p>
        <button className={cn(pagination.oneArrow, pagination.button, isNextPage ? pagination.blue : pagination.white)} onClick={() => nextPage()}>&#8250;</button>
        <button className={cn(pagination.dubleArrow, pagination.button, isNextPage ? pagination.blue : pagination.white)} onClick={() => lastPage()}>&#187;</button>
      </div>
      <div className={pagination.filterContainer}>
        <p className={pagination.text}>по</p>
        <DropDownContainer setOrdersPerPage={setOrdersPerPage} setCurrentPage={setCurrentPage} />
        <p className={pagination.text}>записей</p>
      </div>
    </div>
  )
}

export default Pagination
