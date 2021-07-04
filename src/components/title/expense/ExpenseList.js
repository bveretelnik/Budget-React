import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpense } from "../../../redux/actions";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const dispatch = useDispatch();
  const { expensesList: expenses } = useSelector((state) => state.appReducer);

  useEffect(() => {
    console.log(expenses);
    dispatch(fetchExpense());
    //eslint-disable-next-line
  }, []);

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
