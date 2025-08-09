import React from "react";
import "/src/style/home_page/TableRow.css"

function TableRow(props) {

    const propCount = Object.keys(props).length;

if(propCount>5){
    return(
            <tr>
                <td><img src="./images/icons/TABLE-ICONS/Cryptocurrency.svg" height="30px" width="30px" alt="" /> USD</td>
                <td>0$</td>
                <td>0</td>
                <td>NAN%</td>
                <td>95,998.0</td>
                <td>95,998.0</td>
                <td>$2,520.02</td>
            </tr>
        )
    }

    return (

        <>
        <tr>
            <td>
                {props.CoinImage &&
                    <img  src={props.CoinImage} height="30px" width="30px" alt="" />}{props.imgValue}
            </td>
                <td>{props.Value}</td>
            <td>
               { props.iconImage &&
                <img src={props.iconImage} alt="" />}{props.percentage}
            </td>
        </tr>

        </>



    )
}


export default TableRow;