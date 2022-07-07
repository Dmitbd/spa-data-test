import { useState } from 'react'
import dropdown from './DropDownContainer.module.css'

const DropDownContainer = ({setOrdersPerPage}) => {

  const items = ["10", "25", "50"]
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedItem(value)
    setOrdersPerPage(value)
    setIsOpen(false)
  }

  return (
    <div className={dropdown.dropdown}>
      <div className={dropdown.header} onClick={toggling}>
       <p className={dropdown.valueText}> {selectedItem || "10"} </p>
        {isOpen
          ? <div className={dropdown.closed}></div>
          : <div className={dropdown.opened}></div>}
      </div>
      {isOpen && (
        <div className={dropdown.listContainer}>
          <ul className={dropdown.list}>
            {items.map((item, index) => (
              <li className={dropdown.item} onClick={onOptionClicked(item)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDownContainer
