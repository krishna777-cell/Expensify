import React, { useContext } from "react";
import {GlobalContext} from '../context/GlobalState';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amt = transactions.map((transactions) => transactions.Amount);

  const deposit = amt
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(1);
  const withdraw = amt
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc -= item), 0)
    .toFixed(1);

  return (
    <div className="row">
      <div className="col-md-6 text-center minusIncome py-4">
        <h5 className="mb-1">Deposit</h5>
        <p id="moneyPlus" className="money plus">
          +Rs {deposit}
        </p>
      </div>
      <div className="col-md-6 text-center minusIncome py-4">
        <h5 className="mb-1">Withdrawn</h5>
        <p id="moneyMinus" className="money minus">
          -Rs {withdraw}
        </p>
      </div>
    </div>
  );
};
