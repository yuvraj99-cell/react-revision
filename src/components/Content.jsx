
import { FiTrash } from 'react-icons/fi';
const Content = (item,HandelCheck,HandelDelete) => {
   
  
  return (
    <main>
        {item.length?(
        <ul  >
    {item.map(items =>(
        <li   className='item' key={items.id}>
  <input type="checkbox"
  onChange={ ()=>HandelCheck(items.id) }
  checked={items.checked} />
  <label
  style={(items.checked ) ? {textDecoration: 'line-through'}:null}
  onDoubleClick={()=>HandelCheck(items.id)}
  >{items.items}</label>
  <FiTrash
  onClick={()=>HandelDelete(items.id)}
  tabIndex="0"
  role="button"
  ></FiTrash>
        </li>
    ))}
        
        </ul>
        ):(
            <p style={{marginTop:'2rem'}}>your list is empty</p>
        )
        }
    </main>
  )
}

export default Content;