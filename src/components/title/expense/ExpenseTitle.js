import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpense } from "../../../redux/actions";
import Alert from "../../Alert";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";

function ExpenseTitle() {
  const dispatch = useDispatch();
  const { expensesList: expenses } = useSelector(
    (state) => state.expenseReducer
  );
  const { show } = useSelector((state) => state.alertReducer);

  useEffect(() => {
    console.log(expenses);
    dispatch(fetchExpense());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <h3 className="mt-3">Expenses</h3>
      {show && <Alert color="danger" name="expense" />}
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
      <h4 className="mt-3">Add Expense</h4>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </>
  );
}

export default ExpenseTitle;
