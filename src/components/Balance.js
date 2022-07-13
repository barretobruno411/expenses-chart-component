import React from "react";
import Data from "../data.json";
import Image from "../images/logo.svg";

function Balance(props) {
  function BalanceValue() {
    let TotalValue = 0;
    Data.forEach((element) => {
      TotalValue += element.amount;
    });

    return TotalValue;
  }
  return (
    <div className="balance">
      <div className="txt">
        <h3>My balance</h3>
        <h1>{`$${BalanceValue()}`}</h1>
      </div>
      <img src={Image} alt="logo" />
    </div>
  );
}

export default Balance;
