import React from "react";
import "/src/style/home_page/Main_table.css"
import TableRow from "./TableRow";
import { tableData, MarketMoverstableData } from "/public/coins";
import Input from "/src/components/Input.jsx";


function MainTable() {

    return (
 
       <>

            <div className="GradientWrapper">
                <div className="GradientC GC1"></div>
                <div className="GradientC GC2"></div>
                <div className="GradientC GC3"></div>
                <div className="GradientC GC4"></div>
            </div>

            <div className="TableScrollWrapper">
                <table>
                    <tbody>
                        <tr className="table-headers">
                            <th>Asset <img src="./images/icons/TABLE-ICONS/uil_arrow.svg" alt="" /></th>
                            <th>Market Price <img src="./images/icons/TABLE-ICONS/uil_arrow.svg" alt="" /></th>
                            <th>LPR Price <img src="./images/icons/TABLE-ICONS/uil_arrow.svg" alt="" /></th>
                            <th><span>1m 3m 6m <span className="spanM">M</span></span> Change <img src="./images/icons/tabler_refresh.svg" alt="" /></th>
                            <th>Volume <img src="./images/icons/TABLE-ICONS/uil_arrow.svg" alt="" /></th>
                            <th>Floated Market Cap <img src="./images/icons/TABLE-ICONS/uil_arrow.svg" alt="" /></th>
                            <th>Valuation <img src="./images/icons/TABLE-ICONS/uil_arrow.svg" alt="" /></th>
                        </tr>
                        {
                            MarketMoverstableData.map(
                                (data, index) => {
                                    return (
                                        <TableRow
                                            key={index}
                                            Asset={data.Asset}
                                            MarketPrice={data.MarketPrice}
                                            LPRPrice={data.LPRPrice}
                                            Change={data.Change}
                                            Volume={data.Volume}
                                            Floated={data.Floated}
                                            MarketCapValuation={data.MarketCapValuation}

                                        />
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>

            </div>
       </>
    );
};

export default MainTable;
