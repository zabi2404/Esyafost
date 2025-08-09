import React from "react";
import "/src/style/common/icon.css"
import { Link } from "react-router-dom";

function Icon(props) {
return(
        <div className={props.classname}>
        <Link path="">
            <img src={props.image} alt="" />
    </Link>
        </div>
    );


};

export default Icon;