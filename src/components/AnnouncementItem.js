import React from 'react'

function AnnouncementItem({title, author, date, announcement}) {
  return (
    <div className='announcementItem'>
        <h1 className='title'>{title}</h1>
        <h3 className='author'>{author}</h3>
        <h4 className='announcement'>{announcement}</h4> 
        <p className='date'>{date}</p>
    </div>
  )
}

export default AnnouncementItem