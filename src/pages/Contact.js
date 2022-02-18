import React from "react";
import "../styles/Contact.css";
import Background from "../assets/LeaveYourLEGACY3.png";
import InstagramIcon from '@material-ui/icons/Instagram';
import MessageIcon from "@material-ui/icons/MessageOutlined";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
       <h3> Instagram<a href="https://instagram.com/alphasiguna/" target="_blank" rel="noreferrer"> <InstagramIcon /> </a></h3>
        <h3>Rush Form<a href="https://app.chapterbuilder.com/forms/2015/view/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDE3NjI2NTUsIm5iZiI6MTY0MTc2MjY1NSwianRpIjoiMzllMGMzNzAtMGFmYi00NDYxLWI2NTEtNjIyNjI4MGQzNTQ5IiwiaWRlbnRpdHkiOjIwMTUsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InR5cGUiOiJmb3JtIn19.LEsYGd1ys8rYuMbLfpuedfVyx_9GXPYWoYut7ye4XBE" target="_blank" rel="noreferrer"> <MessageIcon /> </a></h3>
        
      </div>
    </div>
  );
}

export default Contact;