import "/src/style/blog_page/Header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="Blog-header">
            <div className="Gradeint-color"></div>
            <div className="Blog-header-Left">
                <div>
                    <button className="HotTopic-button btn-gradient-3"> Hot Topic</button>
                    <h1>Spend Your Magical Internet Money During the Onchain Holiday</h1>
                </div>
                <div>
                    <img src="/images/icons/facebook (1).svg" alt=""/>
                        <img src="/images/icons/twitter (1).svg" alt=""/>
                            <img src="/images/icons/linkedin (1) 1.svg" alt=""/>
                                <a href=""><img className="link-icon" src="/images/icons/line-md_link.svg" alt=""/></a>
                                <p>Oct 10 • 10 min Read</p>
                                <Link to='/ReadBlog/2'>
                                
                                <button className=" btn-heading btn-gradient-2 readNowButton"> <img src="/images/icons/BUTTON-ICONS/mingcute_eye-line.svg" alt=""/>  Read Now</button>
                                </Link>
                            </div>
                        </div>

                        <div className="Blog-header-Right">
                            <img className="blog-main-img" src="/images/Frame 1261153021.svg" alt=""/>
                        </div>
                </div>
    )
}

export default Header;