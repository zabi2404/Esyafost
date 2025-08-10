import React from "react";
import "../../../style/home_page/Marketing_deal.css";
import CoinsData from "/public/coins.js"
import TableRow from "../MarketMovers/TableRow";
import { tableData } from "/public/coins";
import Coins from './Coins'

function MarketingDeal() {

    return (
        <div className="second-container">
            <div className="S-heading">
                <h1>Emerging Marketing Deals</h1>
                <p>Explore fresh listings and monitor real-time investments trends!</p>
            </div>
            <div className="Listing-Block">
                <div className="Coins">


                    {
                        CoinsData.map((data, index) => {
                            return (

                                <Coins
                                    key={index}
                                    CoinImage={data.CoinImage}
                                    Title={data.Title}
                                    Price={data.Price}
                                    DropDownPercentage={data.DropDownPercentage}
                                    OfferingSize={data.OfferingSize}
                                />
                            );
                        })

                    }


                </div>


                <div className="Listing">
                    <div className="listing-box">
                        <div className="gradient-wrapper gw">
                            <div className="GradientL GL1"></div>
                            <div className="GradientL GL2"></div>
                            <div className="GradientL GL3"></div>
                            <div className="GradientL GL4"></div>
                        </div>

                        <h3 className="underline">New Listing</h3>

                        <div className="table-scroll">

                            <table>
                                <tbody>
                                    {tableData.map((data, index) => {

                                        return (
                                            <TableRow
                                                key={index}
                                                imgValue={data.imgValue}
                                                CoinImage={data.CoinImage}
                                                Value={data.Value}
                                                percentage={data.percentage}
                                                iconImage={data.iconImage}
                                            />
                                        )


                                    })}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>







            </div>
        </div>
    )
}


export default MarketingDeal;