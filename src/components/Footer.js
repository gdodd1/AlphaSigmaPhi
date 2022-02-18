import React from 'react'
//import {Link} from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import MessageIcon from "@material-ui/icons/MessageOutlined";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p> &copy; 2022 alphasiguna.com</p>
            <a href="https://instagram.com/alphasiguna/" target="_blank" rel="noreferrer"> <InstagramIcon /> </a>
            <a href="https://app.chapterbuilder.com/forms/2015/view/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDE3NjI2NTUsIm5iZiI6MTY0MTc2MjY1NSwianRpIjoiMzllMGMzNzAtMGFmYi00NDYxLWI2NTEtNjIyNjI4MGQzNTQ5IiwiaWRlbnRpdHkiOjIwMTUsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InR5cGUiOiJmb3JtIn19.LEsYGd1ys8rYuMbLfpuedfVyx_9GXPYWoYut7ye4XBE" target="_blank" rel="noreferrer"> <MessageIcon /> </a>
        </div>
    </div>
  )
}

export default Footer