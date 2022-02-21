import React from 'react'
import {AnnouncementList} from "../helpers/AnnouncementList";
import AnnouncementItem from '../components/AnnouncementItem';
import "../styles/Announcements.css";

function Announcements() {
  return (
    <div className='announcement'>
        <h1 className='announcementTitle'> Announcements</h1>
        <div className='announcementList'>
            {AnnouncementList.map((announcementItem, key) => {
                return (
                    <AnnouncementItem 
                        key={key}
                        title = {announcementItem.title}
                        author={announcementItem.author}
                        date={announcementItem.date}
                        announcement={announcementItem.announcement}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Announcements