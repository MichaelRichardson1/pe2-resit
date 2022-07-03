import React from "react";
import Wallpaper from "../../images/wallpaper.jpg";

function BgImg(props) {        

    return  <div className="empty">
                 <img src={Wallpaper} alt="game background"/>
                 {props.children}
            </div>;
    
}

export default BgImg;
