import React from "react";
// import Navbar from "../components/navbar";
import TradingHeader from "../sections/trading/Trading_Header";
import TradingFirstSection from "../sections/trading/Trading_firstSection";
import TradingSecondSection from "../sections/trading/Trading_secondSection";

function Home() {
    return (

<>

<div className="">
    
            <TradingHeader />
            <TradingFirstSection />
            <TradingSecondSection />
</div>

        </>
    );
}

export default Home;