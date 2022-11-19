import React from "react";
import './Footer.css'
import twitter from './images/Twitter-Icon.png'
import facebook from './images/Facebook Icon.png'
import instagram from './images/Instagram Icon.png'
import github from './images/GitHub Icon.png'


export default function Footer() {
    return (
        <div className="Footer">
            <a href="#">
                <img src={twitter} alt="..."  className="twitter"/>
            </a>
            <a href="#" >
                <img src={facebook} alt="..." className="facebook"/>
            </a>
            <a href="#">
                <img src={instagram} alt="..."  className="instagram"/>
            </a>
            <a href="#">
                <img src={github} alt="..."  className="github"/>
            </a>
        </div>
    )
}