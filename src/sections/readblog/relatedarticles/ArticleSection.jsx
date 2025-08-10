import React from "react";
import "../../../style/readblog/ArticleSection.css"
import { FaLink } from "react-icons/fa6";


function ArticleSection({img,date,title,description}){

      return(

        <>
        <div className="Article-section">
            <div className="Article-firstpart">
                <img className="top-image" src={img} alt=""/>
            </div>

            <div className="Article-secondpart">
                <div className="article-part">
                    <div className="heading-part">
                        <h1>{title}</h1>
                        <div className="icons-part blog-icons">
                            <img src="/images/icons/facebook (1).svg" alt=""/>
                                <img src="/images/icons/twitter (1).svg" alt=""/>
                                    <img src="/images/icons/linkedin (1) 1.svg" alt=""/>
                                       <FaLink />

                                        <p className="date">{date} • 10 min Read</p>

                                    </div>
                                </div>
                                <div className="blog-part">
                                    <div>
                                        <h4>{description}</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit consectetur molestiae
                                            eum, omnis voluptatibus nemo modi illo ullam at ducimus aliquid sed alias ea corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit consectetur
                                            molestiae
                                            eum, omnis voluptatibus nemo modi illo ullam at ducimus aliquid sed alias ea corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit consectetur
                                            molestiae
                                            eum, omnis voluptatibus nemo modi illo ullam at ducimus aliquid sed alias ea
                                            corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit
                                            consectetur molestiae
                                            eum, omnis voluptatibus nemo modi illo ullam at ducimus aliquid sed alias ea
                                            corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <h4>Exploring Generative AI in Content Creation</h4>
                                        <p>Lorem ipsum olestiae
                                            eum, omnis voluptatibus nemo modi illo ullam at ducimus aliquid sed alias ea
                                            corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit
                                            consectetur
                                            molestiae
                                            eum, omnis v sed alias ea
                                            corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit
                                            consectetur
                                            molestiae
                                            eum, omnisuptatibus nemo modi illo ullam at ducimus aliquid sed alias ea
                                            corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                        <p>Lorem ipsum d consectetur, adipisicing elit. Debitis velit
                                            consectetur molestiae
                                            eum, omnis voluptatibus nemo modi illo ullam at ducimus aliquid sed alias ea
                                            corporis
                                            possimus
                                            nihil sequi dolor?</p>
                                    </div>
                                    <div className="blog-img">
                                        <h4>Afterword: The AI Behind This Article</h4>
                                        <img className="bloged-img" src="./images/Frame 29.svg" alt=""/>
                                    </div>
                                    <div className="blog-footer">

                                        <div>
                                            <p>Like what you see? Share with your friends.</p>
                                        </div>

                                        <div className="blog-icons blog-icons2">
                                            <img src="/images/icons/ICONS/facebook (1) (1).svg" alt=""/>
                                                <img src="/images/icons/ICONS/twitter (1) (2).svg" height="20" width="20" alt=""/>
                                                    <img src="/images/icons/ICONS/linkedin (1) 1.svg" height="20" width="20" alt=""/>
                                                    </div>

                                                </div>
                                        </div>
                                    </div>

                                    <div className="side-panel">
                                        <table>
                                        <tbody>
                                                <tr>
                                                <th>In this article</th>
                                            </tr>
                                            <tr>
                                                <td>Exploring Generative AI in Content Creation</td>
                                            </tr>
                                            <tr>
                                                <td>Steering Clear of Common AI Writing Pitfalls</td>
                                            </tr>
                                            <tr>
                                                <td>Understanding ChatGPT Capabilities - Define Your Style</td>
                                            </tr>
                                            <tr>
                                                <td>Understand Your Readers</td>
                                            </tr>
                                            <tr>
                                                <td>Creating Quality AI-powered Blogs that Stand Out</td>
                                            </tr>
                                            <tr>
                                                <td>Conclusion: Embracing AI in Blog Creation</td>
                                            </tr>
                                            <tr>
                                                <td>Afterword: The AI Behind This Article</td>
                                            </tr>
                                        </tbody>

                                        </table>
                                    </div>
                                </div>
                        </div>
        </>
    )
}

export default ArticleSection;