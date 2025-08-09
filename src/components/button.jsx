import React from "react";
import "/src/style/common/button.css"
import { Link } from "react-router-dom";

function Button(props){
 return(
    
     <Link to={`${props.path?props.path:`#`}`} className="myButton"> {props.title}</Link>
 )
}

export default Button;