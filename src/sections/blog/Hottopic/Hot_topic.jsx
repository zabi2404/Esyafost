import React from "react";
import "/src/style/blog_page/HotTopic.css"
import LedgerCard from "../../home/Ledger/LedgerCard";
import { HotTopicLedgerCardData } from "/public/coins";

function HotTopic(){

    const [CardCount , setCardCount] = React.useState(6);

    function LoadCard(event){
        event.preventDefault();
        setCardCount(9);
    }
    return(

        <section className="hotTopicSection">
            <div>
                <div className="HotTopic-Header">
                    <h2>Hot Topics</h2>
                </div>
                <div className="Ledger-Section BlogLedger-Section" id="ledger-container">
                    {HotTopicLedgerCardData.slice(0,CardCount).map((data, index) => {
                        return (
                            <LedgerCard
                            key={data.id}
                                id={data.id}
                                image={data.image}
                                date={data.date}
                                title={data.title}
                                description={data.description}
                            />
                        )

                    })}
                </div>

                <div className="laodmore-button" id="loadmore" ><button onClick={LoadCard}   style={CardCount === 9 ? { opacity: "0" } : {}} type=" button"
                 className="myButton btn-gradient-2 readNowButton"> Load More<img
                        src="images/icons/BUTTON-ICONS/icon-park-solid_down-one.svg" alt=""/></button></div>
        </div>
        </section>
    )
}

export default HotTopic;