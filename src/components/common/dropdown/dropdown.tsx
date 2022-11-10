import { MouseEvent, useState } from 'react'
import styles from './dropdown.module.scss'

interface Dropdown {
  options: string[]
  onChange: (option: string) => void
}

export const DropDown = ({ options, onChange }: Dropdown) => {
  const [toggle, setToggle] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const toggleDropdown = () => setToggle((prevstate) => !prevstate)
  const selectOption = (option: string) => {
    setSelectedOption(option)
    setToggle((prevState) => !prevState)
    onChange(option)
  }

  return (
    <div
      className={`${styles.dropdownContainer} ${
        toggle ? styles.arrowUp : styles.arrowDown
      }`}
    >
      <div className={styles.dropdownTitle} onClick={toggleDropdown}>
        {selectedOption}
      </div>
      <ul
        className={`${styles.dropdown}
        ${toggle ? styles.active : styles.inactive}
        `}
      >
        {options.map((option, index) => (
          <li
            className={styles.dropdownOption}
            key={index}
            onClick={() => selectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}
