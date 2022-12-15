
import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App(props) {
  const[item, setItem] = useState([
    {
        id:1,
        checked:false,
        item:"this is 1st item"
    },
    {
        id:2,
        checked:true,
        item:"this is 2st item"
    },
    {
        id:3,
        checked:false,
        item:"this is 3st item"
    }
]);
const HandelCheck = (id)=>{
   const listItems= item.map((item)=> item.id===id ?{...item , checked: !item.checked}:item);
   setItem(listItems);
   localStorage.setItem('shoppinglist',JSON.stringify(listItems));
};
const HandelDelete=(id)=>{
const listItems = item.filter((item)=>item.id!==id);
setItem(listItems);
localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}
 
  return (
    <div className="App">
     <Header title="Groceries"/>
     <Content
     item={item}
     HandelCheck={HandelCheck}
     HandelDelete={HandelDelete}
     />
     <Footer/>
    </div>
  );
}

export default App;
