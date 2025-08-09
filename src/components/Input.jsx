import React from "react";
import "/src/style/common/input.css"


function Input(){

    return(
        <form className="d-flex" role="search">
        <div className="input-wrapper">
          <input className="form-control1 navFormcontrol " type="search" placeholder="Search" aria-label="Search" />
          <img src="/images/icons/BUTTON-ICONS/material-symbols_search.svg" className="input-icon" alt="Search" />
        </div>
      </form>
    );
};

export default Input;
