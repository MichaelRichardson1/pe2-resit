import React from "react";
import Logo from "../../images/logo.png";

function EmptyHeader() {        

    return  <header className="empty">
                 <img src={Logo} alt="bits and bots logo"/>
            </header>;
    
}

export default EmptyHeader;
