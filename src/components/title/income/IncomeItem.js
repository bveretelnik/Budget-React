import React from "react";
import { TiDelete } from "react-icons/ti";

function IncomeItem({ name, cost }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-success">{cost} UAH</span>
        <TiDelete size="1.5rem" />
      </div>
    </li>
  );
}

export default IncomeItem;
