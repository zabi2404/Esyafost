import React from "react";
import RelatedArticles from "../sections/readblog/relatedarticles/RelatedArticles";
import ArticleSection from "../sections/readblog/relatedarticles/ArticleSection";
import { useParams } from "react-router"
import { LedgerCardData } from "../../public/coins";
function ReadBlog() {
    let params = useParams();
   const blogid =Number(params.blogID);



const Data = LedgerCardData.find((item)=>blogid===item.id);

    return (

        <>
    {  Data? <ArticleSection
                        img={Data.image}
                        date={Data.date}
                        title={Data.title}
                        description={Data.description}

                    />:"Error"}
                 
                    
                
            

            <RelatedArticles />

        </>
    );
}

export default ReadBlog;