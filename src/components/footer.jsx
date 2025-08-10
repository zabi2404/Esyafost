import "../style/common/footer.css"
import Icon from "./Icon";
import FooterMenu from "./footer_menu";

function Footer() {

    return (
        <footer id="dynamicfooter">
            <div className="footer-section">
                <div className="GradientWrapper">
                    <div className="GradientFF GFF1"></div>
                    <div className="GradientFF GFF2"></div>
                    <div className="GradientFF GFF3"></div>
                    <div className="GradientFF GFF4"></div>
                </div>

                <div className="footer-part fp1">
                    <img className="logo" src="/images/icons/LOGOS/esyassoft 1.svg" alt="Logo" style={{ marginBottom: "1rem" }} />
                    <p>
                        Multipy your money! With their user-friendly interface and expert
                        market analysis, you'll be earning more in no time.
                    </p>
                    <div className="footer-icon">

                        <Icon
                            classname="icon-div"
                            image="/images/icons/footer-icons/Facebook.svg"
                        />
                        <Icon
                            classname="icon-div"
                            image="/images/icons/footer-icons/Twitter.svg"
                        />
                        <Icon
                            classname="icon-div"
                            image="/images/icons/footer-icons/Instagram.svg"
                        />
                        <Icon
                            classname="icon-div"
                            image="/images/icons/footer-icons/LinkedIn.svg"
                        />
                        <Icon
                            classname="icon-div"
                            image="/images/icons/footer-icons/YouTube.svg"
                        />




                    </div>
                </div>


                <FooterMenu
                    className=""
                    li0="Product"
                    li1="Features"
                    li2="Pricing"
                    li3="Security"
                    li4="Buisness"
                />

                <FooterMenu
                    className=""
                    li0="Company"
                    li1="About Us"
                    li2="Careers"
                    li3="Blogs"
                    li4="Blogs"
                />

                <FooterMenu
                    className="fp4"
                    li0="Contact Us"
                    li1="123, Street, New York"
                    li2="info@esyasoft.com"
                    li3="(025) 8692700"
                    li4=""
                />



            </div>

        </footer>
    );
}

export default Footer;