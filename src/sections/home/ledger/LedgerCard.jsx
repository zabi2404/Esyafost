import React from "react";
import "/src/style/home_page/ledger.css";
import { Link } from "react-router-dom";


function LedgerCard(props) {

  return (

      <div className="LedgerCard">
          <div>
              <img
                  src={props.image}
                  height="50%"
                  width="50%"
                  alt=""
              />
          </div>
          <div className="LC-section">
              <div className="GradientWrapper">
                  <div className="GradientL GL1"></div>
                  <div className="GradientL GL3"></div>
                  <div className="GradientL GL4"></div>
              </div>
              <p>{props.date}</p>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
              <div>
                  <Link to={`/ReadBlog/${props.id}`}>
                      View Blog
                  <img src="./images/icons/LEDGER-CARD/Frame.svg" alt="" />
                  </Link>

              </div>
          </div>
      </div>

  );
}

export default LedgerCard;
