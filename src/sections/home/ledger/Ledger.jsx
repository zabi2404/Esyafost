import React from "react";
import "../../..//style/home_page/ledger.css";
import { LedgerCardData } from "/public/coins";
import LedgerCard from "./LedgerCard";
import Button from "/src/components/button";



function Ledger() {
  return (
    <div className="Sixth-Section">
      <div className="Sheader">
        <h1>Our Digital Ledger</h1>
        <p>
          Your go-to blog for the latest trends, insight &amp; analysis in
          digital assets!
        </p>
      </div>

      <div className="Ledger-Section" id="ledger-container">
              {LedgerCardData.map((data,index)=>{
   return(
       <LedgerCard
       id={data.id}
           key={index}
           image={data.image}
           date={data.date}
           title={data.title}
           description={data.description}
       />
   )

})}

        <div className="LedgerFullCard LC">
          <div>
            <div className="LC-section LFC">
              <h4>Still Hungry for Knowledge?</h4>
              <div>
               <Button
path="/blog"
                title="Read All Blogs"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ledger;
