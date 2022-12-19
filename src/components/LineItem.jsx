import React from 'react'
import { FiTrash } from 'react-icons/fi'

const LineItem = ({items,HandelCheck,HandelDelete}) => {
  return (
    <li   className='item' key={items.id}>
    <input type="checkbox"
    onChange={ ()=>HandelCheck(items.id) }
    checked={items.checked} />
    <label
    style={(items.checked ) ? {textDecoration: 'line-through'}:null}
    onDoubleClick={()=>HandelCheck(items.id)}
    >{items.item}</label>
    <FiTrash 
    onClick={()=>HandelDelete(items.id)}
    tabIndex="0"
    role="button"
    aria-label={`Delete ${items.item}`}
    ></FiTrash>
          </li>
  )
}

export default LineItem