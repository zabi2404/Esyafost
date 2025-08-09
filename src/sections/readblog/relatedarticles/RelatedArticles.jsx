import React from "react";
import "/src/style/readblog/ArticleSection.css"
import LedgerCard from "../../home/Ledger/LedgerCard";
import { LedgerCardData } from "/public/coins";


function RelatedArticles() {
    return (

        <>

            <div className="Related-article-section">

                <h3>Related Articles</h3>

                <div className="Ledger-Section articleledger" id="ledger-container">

                    {LedgerCardData.slice(0,3).map((data, index) => {
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

            </div>

        </>
    );
}

export default RelatedArticles;