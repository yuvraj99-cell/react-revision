import React from 'react'
import { HiPlus } from 'react-icons/hi';
const AddItem = ({newItem, setNewItem, HandelSubmit}) => {
  return (
    <form  className='addForm' onSubmit={HandelSubmit}>
    <label htmlFor="addItem">ADD ITEM</label>
   <input 
   autoFocus
   id='addItem'
   type="text" 
   placeholder='Add Item'
   
   required
   value={newItem}
   onChange={(event) => setNewItem(event.target.value)}
   />

   <button type='submit'
   aria-label='Add Item'
    
   >
    <HiPlus/>
   </button>
    </form>
  )
}

export default AddItem