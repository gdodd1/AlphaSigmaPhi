import React from 'react'
import "../styles/Calendar.css";
//import pic from "../assets/LeaveYourLEGACY2.png";
//fix background pic
function Calendar() {
  return (
    <div className='calendarDiv'>
        <a href="https://calendar.google.com/calendar/embed?src=r0kmjstvbs47549842g2ivc1oc%40group.calendar.google.com&ctz=America%2FChicago"
        target="_blank" rel="noreferrer">
            <h1 className='calendarH1'>
                Click here for access to the Google Calendar
            </h1>
        </a>
    </div>
  )
}

export default Calendar