import React from "react";
import "/src/style/trading_page/TradingHeader.css"


function TradingHeader()  {

    return(
        <div className="Trading-header">
            <div className="Trading-header-background"> </div>
            <div className="Trading-header-first-part">
                <div className="Trading-header-background  Trading-header-button-background"> </div>
                <img src="./images/icons/Cryptocurrency.svg" alt=""/>
                    <h4>BTC/USDT</h4>
                    <img src="./images/icons/icon-park-solid_down-one.svg" alt=""/>
                    </div>
                    <div className="Trading-header-second-part">
                        <table>
                             <tbody>
                                <tr>
                                    <th>$159123</th>
                                    <th>24h Change</th>
                                    <th>24h Low</th>
                                    <th>24h Volume (BTC)</th>
                                    <th>24h Volume (USDT)</th>
                                </tr>
                                <tr>
                                    <td>$159123</td>
                                    <td>-532, -256% </td>
                                    <td>-532, -256% </td>
                                    <td>-532, -256% </td>
                                    <td>-532, -256% </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
    );

}

export default TradingHeader;

