import React from "react";
import "/src/style/home_page/Market_Overview.css"
import MarketMovers from "../MarketMovers/Market_Movers";
import Input from "/src/components/Input.jsx"
import MainTable from "../MarketMovers/Main_table";


function MarketOverview (){


    function handleButtonClick(e) {

      const button = e.target.closest("button");
      // if (!button) return; 
    const allButtons = document.querySelectorAll(".Coin-Table-nav button");
      allButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");


    }

return(
<>


    <div className="fourth-section">
    <div className="Fheader">
      <div>
        <h1>Digital Asset Market Overview</h1>
        <p>
          ReaL-time prices,market changes & vaulation across asset classNamees
        </p>
      </div>

      <Input/>

    </div>

      <div onClick={handleButtonClick} className="Coin-Table-nav">
      <button className=" btn All active btn-gradient-2"><span>All</span></button>
      <button className="btn-gradient-2 btn"><img src="./images/icons/BUTTON-ICONS/fluent_flowchart-circle-20-filled (1).svg"
          alt=""/><span>Private
          Equity</span></button>
      <button className="btn btn-gradient-2"><img src="./images/icons/BUTTON-ICONS/solar_chart-bold.svg"
          alt=""/><span>Private
          Debt</span></button>
      <button className="btn btn-gradient-2"><img src="./images/icons/BUTTON-ICONS/mynaui_line-chart-circle-solid.svg"
          alt=""/><span>Diversity
          Funds</span></button>
      <button className="btn btn-gradient-2"><img src="./images/icons/BUTTON-ICONS/bxs_buildings.svg" alt=""/><span>Real
          Estate</span></button>
      <button className="btn btn-gradient-2"><img src="./images/icons/BUTTON-ICONS/ph_windmill-fill.svg"
          alt=""/><span>infrastructure</span></button>
      <button className="btn btn-gradient-2"><img src="./images/icons/BUTTON-ICONS/material-symbols_rocket.svg"
          alt=""/><span>Venture
          Capital</span></button>

          <select  className="btn-gradient-2">
            <option value="">Select your Region
            </option>
            <option>Asia</option>
            <option>Europe</option>
            <option>North America</option>

          </select>

    </div>

    <div className="Coin-Table2">



    <MainTable/>


            </div>

  </div>
    </>
);
};

export default MarketOverview;
