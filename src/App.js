
import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import AddItem from './components/AddItem';

function App() {
  const [newItem, setNewItem] = useState("");

  const[items, setItem] = useState(JSON.parse(localStorage.getItem('shoppinglist')));


const setAndsaveItem =(newItem)=>{
  setItem(newItem);
  localStorage.setItem('shoppinglist',JSON.stringify(newItem));
}
const HandelCheck = (id)=>{
   const listItems= items.map((item)=> item.id===id ?{...item , checked: !item.checked}:item);
   setAndsaveItem(listItems);
   
};
const HandelDelete=(id)=>{
const listItems = items.filter((item)=>item.id!==id);
setAndsaveItem(listItems);

}

const HandelSubmit=(event)=>{
  event.preventDefault();
  if(!newItem)return;
 addItem(newItem);
 setNewItem(""); 
}
 const addItem=(items)=>{
  const id= items.length ? items[items.length-1].id+1:1;
  const myNewItem= {id, checked:false,items};
  const listItems=[...items, myNewItem];
  setAndsaveItem(listItems);

 }
  return (
    <div className="App">
     <Header title="Groceries"/>
     <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      HandelSubmit={HandelSubmit}/>
     <Content
     item={items}
     HandelCheck={HandelCheck}
     HandelDelete={HandelDelete}
    
     />
     <Footer
       length={items.length}
       />
    </div>
  );
}

export default App;
