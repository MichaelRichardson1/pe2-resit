import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {        

    return      <>
                    <div className="page__footer">
                        <a href ="#privacy">Privacy</a>
                        <a href ="#contact">Contact</a>
                        <a href ="#about">About</a>     
                        <p>Copyright 2022 - Bits And Bots</p>                   
                        <span><FontAwesomeIcon icon={["fab", "facebook"]} /><FontAwesomeIcon icon={["fab", "youtube"]} /><FontAwesomeIcon icon={["fab", "twitter"]} /></span>
                    </div>
                </>
                ;
    
}

export default Footer;
