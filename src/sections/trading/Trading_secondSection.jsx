import React from "react";
import "/src/style/trading_page/TradingSecondSection.css"
import TableRow from "../home/MarketMovers/TableRow";
import { TradeBook } from "/public/coins";

function TradingSecondSection() {

    function handleButtonClick(e) {

        const button = e.target.closest("button");
        if (!button) return;
        const allButtons = document.querySelectorAll(".trade-history-buttons button");
        allButtons.forEach(btn => btn.classList.remove("trade-history-buttons-active"));
        button.classList.add("trade-history-buttons-active");


      }

    return (
        <div className="Trading-second-section">
            <div className="trade-book">
                <div className="Trading-first-section-bakground"></div>
                <h3>Trade Book</h3>
                <div className="trade-book-scroll">
                    <table>
                        <tbody>
                            <tr>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Time</th>
                            </tr>
                            {TradeBook.map((data, index) => {

                                return (
                                    <TableRow
                                        key={index}
                                        imgValue={data.price}
                                        CoinImage=""
                                        Value={data.amount}
                                        percentage={data.total}
                                    />
                                )


                            })}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="trade-history">
                <div className="Trading-first-section-bakground trade-history-background"></div>
                <div className="trade-history-nav">

                    <div onClick={handleButtonClick} className="trade-history-buttons" id="trade-history-buttonsID">
                        <button className="trade-history-buttons-active"><span>Trades</span></button>
                        <button><span>Orders</span></button>
                        <button><span>Alerts</span></button>
                        <button><span>History</span></button>
                    </div>

                    <img className="trade-history-icon" src="./images/icons/cuida_expand-outline.svg" alt="" width="20"/>
                </div>
                <div className="trade-history-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Date/Time</th>
                                <th>Assets</th>
                                <th>Order type</th>
                                <th>Order Value</th>
                                <th>Order Qty</th>
                                <th>Order Price</th>
                                <th>Current Price</th>
                                <th>Fees</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );

}

export default TradingSecondSection;

