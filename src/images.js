import img_1 from "./img-1.jpg"
import './images.css';
// import './borders.js';
import { useState } from "react";

const Images=(props)=> {

    const [isActive,setIsActive]=useState(null);

    const touchHandler=()=>{
        setIsActive("active");
    }

    return (
        <div onMouseOver={touchHandler} id="som" className={isActive}>
            <img className="image" src={img_1}/>
            <div id="layer" className={isActive}></div>
            <div id="namePlate" className={isActive}>Mrs.Drashti Patel</div>
            <div id="upper" className={isActive}></div>
            <div id="midl" >
                
                

                   <div id="left" className={isActive}></div>
                    <div id="right" className={isActive}></div>
        
            </div>
            <div id="lower" className={isActive}></div>
        </div>
    )
}


export default Images;