import React from "react";
import "/src/style/home_page/Coins.css"


function Coins(props){
    return(


        <div className="continer">
            <div className="Gradient G1"></div>
            <div className="Gradient  G2"></div>
            <div className="Gradient G3"></div>
            <div className="Gradient G4"></div>
            <div className="Card">
                <div className="card-header">
                    <img
                        src={props.CoinImage}
                        width="20%" alt="coin-image" />
                    <h4>{props.Title}</h4>
                </div>

                <div className="line-1">
                    <p >{props.Price}$</p>
                    <img src="./images/icons/COINS ICON/formkit_arrowdown.svg" alt="" />
                    <p >{props.DropDownPercentage}%</p>
                </div>
                <div className="line-2">
                    <p>Total offering Size</p>
                    <p >${props.OfferingSize}</p>
                </div>
            </div>
        </div>
    );
}

export default Coins;


