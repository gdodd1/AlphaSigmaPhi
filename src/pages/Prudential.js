import React from 'react'
import {PrudentialList} from "../helpers/PrudentialList";
import PrudentialItem from '../components/PrudentialItem';
import "../styles/Prudential.css";

function Menu() {
  return (
    <div className='prudential'>
        <h1 className='prudentialTitle'> Our Prudential Board</h1>
        <div className='prudentialList'>
            {PrudentialList.map((prudentialItem, key) => {
                return (
                    <PrudentialItem 
                        key={key}
                        image={prudentialItem.image} 
                        name={prudentialItem.name} 
                        bio={prudentialItem.bio}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Menu