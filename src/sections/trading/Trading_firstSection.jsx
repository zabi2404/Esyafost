import React from "react";
import "../../style/trading_page/TradingFirstSection.css"
import { OrderBook1 } from "/public/coins";
import TableRow from "../home/MarketMovers/TableRow";
import { orderBookData2 } from "/public/coins";
import TradingChartWithPriceScale from "../../components/TradingChart";

function TradingFirstSection() {


    function handleButtonClick(e) {
        const button = e.target.closest("button");
        if (!button) return;

        // Find the closest container div with id either "buy-sell-buttonID" or "limit-market-buttonID"
        const container = button.closest("#buy-sell-buttonID, #limit-market-buttonID");
        if (!container) return;

        // Determine which class to remove/add based on container id
        let activeClass;
        if (container.id === "buy-sell-buttonID") {
            activeClass = "buy-sell-button-active";
        } else if (container.id === "limit-market-buttonID") {
            activeClass = "limit-market-button-active";
        } else {
            return; // no match, do nothing
        }

        // Remove active class from all buttons inside this container
        const allButtons = container.querySelectorAll("button");
        allButtons.forEach(btn => btn.classList.remove(activeClass));


        button.classList.add(activeClass);
    }


    return (
        <div className="Trading-first-section">

            <div className="order-book">
                <div className="Trading-first-section-bakground"></div>
                <div className="order-book-header">
                    <h3>Order Book</h3>
                    <div className="order-book-icons">
                        <div className="order-book-icons-background"></div>
                        <img src="./images/icons/ORDER-BOOK/Group 1430104935.svg" alt=""/>
                            <img src="./images/icons/ORDER-BOOK/Group 1430104936.svg" alt=""/>
                                <img src="./images/icons/ORDER-BOOK/Group 1430104937.svg" alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="order-book-table1-scroll">
                                    <table className="order-book-table1">
                                        <tbody>
                                            <tr>
                                                <th>Price</th>
                                                <th>Amount</th>
                                                <th>Price</th>
                                            </tr>

                                {OrderBook1.map((data, index) => {

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
                                <div className="table2-header">
                                    <h4>13.17 </h4>
                                    <img src="./images/icons/COINS ICON/formkit_arrowdown.svg" alt=""/>
                                        <p>$13.17</p>
                                        <img src="./images/icons/weui_arrow-filled.svg" alt=""/>
                                        </div>
                                        <div className="order-book-table2-scroll">
                                            <table className="order-book-table2">
                                                <tbody>
                                {orderBookData2.map((data, index) => {

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
                            </div>
                            <div className="market-section">
                                <div className="buy-sell-block">

                                    <div className="buy-sell-block-head">

                                        <h5>Market</h5>
                                        <h5>Watchlist</h5>
                                    </div>


                    <div onClick={handleButtonClick} className="buy-sell-button" id="buy-sell-buttonID">
                                        <div className="buy-sell-button-background"></div>
                                        <button className="buy-sell-button-active">Buy</button>
                                        <button>Sell</button>
                                    </div>
                    <div onClick={handleButtonClick} className="limit-market-button" id="limit-market-buttonID">
                                        <button className="limit-market-button-active">Market</button>
                                        <button>Limit</button>
                                        <p>Balance</p>
                                        <p>15,2000 USD</p>
                                    </div>

                                    <div>
                                        <label typeof="button">Current Price</label>
                                        <input className="CurrentPrice" type="text" name="" id="" placeholder="USD"/>
                                            <label >Quantity</label>
                                            <input className="Quantity" type="text" name="" id="" placeholder="1" />
                                                <div className="progress-slider" id="slider">
                                                    <div className="step active"></div>
                                                    <div className="line"></div>
                                                    <div className="step"></div>
                                                    <div className="line"></div>
                                                    <div className="step"></div>
                                                    <div className="line"></div>
                                                    <div className="step"></div>
                                                    <div className="line"></div>
                                                    <div className="step"></div>
                                                </div>
                                                <label >Odervalue</label>
                                                <input className="Odervalue " type="text" name="" id="" placeholder="USD" />
                                                </div>
                                                <div className="buy-sell-button-last-section">
                                                    <div>
                                                        <p>Fees</p>
                                                        <p>Total</p>
                                                        <p>Cash Available</p>
                                                    </div>
                                                    <div>
                                                        <p>$NaN</p>
                                                        <p>$NaN</p>
                                                        <p>$NaN</p>

                                                    </div>

                                                </div>
                                                <button className="buy-sell-button-last-button ">Buy</button>
                                            </div>

                                    </div>
                                    <div className="graph buy-sell-block">

                                        <TradingChartWithPriceScale/>
                                    </div>
                                </div>
    );
}

export default TradingFirstSection;
