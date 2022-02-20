import React from 'react'

function PrudentialItem({name, image, bio}) {
  
  return (
    <div className='prudentialItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h4>{name}</h4>
        <p>{bio}</p>
    </div>
  )
}

export default PrudentialItem