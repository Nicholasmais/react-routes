import React from 'react'
import s from "../styles/SelectFilter.module.scss"

const SelectFilter = ({changeValue, items, filterFor}) => {
  return (
    <div className={s.selectContainer}>
      <select name="select" id="" onChange={s => changeValue(s.target.value)}>
        <option value="" defaultValue="selected">Filtrar por {filterFor}</option>
        {items.map((obj, i) => {
        return  <option key={`option_${i}`} value={obj}>{obj}</option>
        })}
      </select>
    </div>
  )
}

export default SelectFilter