import React from "react"
import avatar from './images/avatar.jpeg'
import './Header.css'
import emailIcon from'./images/email-button.png'
import linkedinIcon from'./images/linkdin button.png'

export default function Header() {
    return (
        <div className="header">
          <img src={avatar} alt="..." className="avatar"/>
            <h1>DelAra Pouraghaei</h1>
            <p>Frontend Developer</p>
            <small>laurasmith.website</small>
            <br />
             <a href="#" className="email-icon">
                <img src={emailIcon}></img>
             </a>
             <a href="#" className="linkedin-icon">
                <img src={linkedinIcon}></img>
             </a>
        </div>
    )
}