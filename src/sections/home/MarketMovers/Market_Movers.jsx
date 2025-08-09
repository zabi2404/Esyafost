import React from "react";
import "/src/style/home_page/Market_movers.css"
import TableRow from "./TableRow";
import { tableData, MarketMoverstableData } from "/public/coins";
import Input from "/src/components/Input.jsx";
import MainTable from "./Main_table";

function MarketMovers() {

    return (
        <div className="third-section">

            <div className="Theader">
                <div>
                    <h1>Elite Market Movers</h1>
                    <p>
                        Discover the most actively traded crypto assests, with real-time
                        insight into market trends.
                    </p>
                </div>

                <Input />
            </div>
            <div className="Coin-Table">

                <MainTable/>

            </div>

        </div>

    );
};

export default MarketMovers;
