import React from 'react';
import LineItem from './LineItem';


const IteamList = ({item,HandelCheck,HandelDelete}) => {
  return (
    <ul  >
    {item.map((item )=>(
        <LineItem
        key={item.id}
        items={item}
        HandelCheck={HandelCheck}
        HandelDelete={HandelDelete}
        />
    ))}
        
        </ul>
  )
}

export default IteamList