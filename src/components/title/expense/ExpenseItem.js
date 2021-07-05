import React from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../../redux/actions";

function ExpenseItem({ id, name, cost }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-danger">{cost} UAH</span>
        <TiDelete
          style={{ cursor: "pointer" }}
          size="1.5rem"
          onClick={() => dispatch(removeExpense(id))}
        />
      </div>
    </li>
  );
}

export default ExpenseItem;
