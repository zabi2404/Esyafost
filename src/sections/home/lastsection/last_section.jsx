import React from "react";
import "/src/style/home_page/Last_Section.css"
import Button from "/src/components/button";

function LastSection (){
return(
    <div className="Seventh-section">
        <div className="GetStarted-Section">
            <div className="GradientWrapper">
                <div className="GradientS GS1"></div>
                <div className="GradientS GS2"></div>
                <div className="GradientS GS3"></div>
                <div className="GradientS GS4"></div>
            </div>
            <div className="first-half">
                <h1>Smart Moves Lead To Bigger Gains</h1>
                <p>Continue Journey with Esyasoft and watch your health grow!</p>
                <Button
                title="Get Started"
                />
            </div>
            <div className="mainimg-section">
                <img className="main-img" src="/images/MAIN 1.png" alt="" />
            </div>
        </div>
    </div>


);
};

export default LastSection;
