import React from "react";
import "../../../style/home_page/FeaturesCard.css"
import FeatureCard from "./Feature_Card";
import { tableData, MarketMoverstableData, featureCards } from "/public/coins";

function Features (){
return(


    <div className="Fifth-Section">
        <div className="Fiheader">
            <h1>Features</h1>
            <p>
                Uncover the full range of advantages that Esyasoft offers with its
                robust and feature-rich platform.
            </p>
        </div>

        <div className="Feature-card">
           {
            featureCards.map(
                (data,index)=>{
                    return (<FeatureCard
                    key={index}
                        className={data.className}
                        image={data.image}
                        title={data.title}
                        description={data.description}
                    />)
                }
            )
           }

        </div>
    </div>
);
};

export default Features;
