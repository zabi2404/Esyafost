import React from "react";
import "/src/style/common/footer.css"


function FooterMenu(props){

    return(
        <div className={`footer-part ${props.className}`}>
            <ul>
                <li className="fp-li">{props.li0}</li>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>
            </ul>
        </div>
    )
};
export  default FooterMenu;