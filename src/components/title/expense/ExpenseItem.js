import React from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../../redux/actions";

function ExpenseItem({ id, name, cost }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    console.log("CLK" + id);
    return dispatch(() => removeExpense(id));
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-danger">{cost} UAH</span>
        <TiDelete size="1.5rem" onClick={handleRemove} />
      </div>
    </li>
  );
}

export default ExpenseItem;
