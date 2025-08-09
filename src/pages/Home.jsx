import React from "react";
import HeroSection from "../sections/home/HeroSection/Hero_section";
import MarketingDeal from "../sections/home/MarketingDeals/Marketing_Deals"
import MarketMovers from "../sections/home/MarketMovers/Market_Movers"
import MarketOverview from "../sections/home/MarketOverview/Market_Overview";
import Features from "../sections/home/Features/Features";
import Ledger from "../sections/home/Ledger/Ledger";
import LastSection from "../sections/home/lastsection/last_section";



 
function Home(){
    return(

<>
<HeroSection/>
<MarketingDeal/>
<MarketMovers />
<MarketOverview/>
<Features/>
<Ledger/>
<LastSection/>


</>
    );
}

export default Home;