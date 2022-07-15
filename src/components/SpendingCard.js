import React from "react";
import Data from "../data.json";
import BarData from './Bar';

function SpendingCard(props) {
  function Total() {
    let totalAmount = 0;
    Data.forEach((element) => (totalAmount += element.amount));
    return totalAmount;
  }

  return (
    <div className="spendingCard">
      <h2>Spending - Last 7 days</h2>
      <div className="graph">

        <BarData></BarData>
        
      </div>
      <hr />
      <div className="totalThisMont">
        <div className="left">
          <p>Total this month</p>
          <h1>{`$${Total()}`}</h1>
        </div>
        <div className="rigth">
          <h4>+2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default SpendingCard;
