import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <>
      <ul className="list-group mt-3 mb-3">
        {expenses &&
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
      </ul>
    </>
  );
}

export default ExpenseList;
