import React from "react";
import "/src/style/home_page/Features.css"


function FeatureCard (props){
return(
    <div className= {`Fcard ${props.className}`}>
        <div className="GradientWrapper">
            <div className="GradientF GF1"></div>
            <div className="GradientF GF2"></div>
            <div className="GradientF GF3"></div>
            <div className="GradientF GF4"></div>
        </div>
        <div>
            <img src={props.image} height="40px" width="40px" alt="" />
        </div>
        <div>
            <h4>{props.title}</h4>
            <p>
               {props.description}
            </p>
        </div>
    </div>
);
};

export default FeatureCard;