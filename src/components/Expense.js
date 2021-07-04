import React from "react";

function Expense({ expense }) {
  return (
    <div className="alert alert-danger">
      <span>Expense: {expense} UAH</span>
    </div>
  );
}

export default Expense;
