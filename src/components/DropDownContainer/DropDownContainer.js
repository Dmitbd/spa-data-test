import { useState } from 'react'
import dropdown from './DropDownContainer.module.css'

const DropDownContainer = ({ setOrdersPerPage, setCurrentPage }) => {

  const items = [5, 10, 25, 50]
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(5)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedItem(value)
    setOrdersPerPage(value)
    setIsOpen(false)
    setCurrentPage(1)
  }

  return (
    <>
      <div className={dropdown.dropdown}>
        <div className={dropdown.header} onClick={toggling}>
          <p className={dropdown.valueText}> {selectedItem} </p>
          {isOpen
            ? <div className={dropdown.closed}></div>
            : <div className={dropdown.opened}></div>}
        </div>
      </div>
      {
        isOpen && (
          <div className={dropdown.listContainer}>
            <ul className={dropdown.list}>
              {items.map((item, index) => (
                <li className={dropdown.item} onClick={onOptionClicked(item)} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </>
  )
}

export default DropDownContainer
