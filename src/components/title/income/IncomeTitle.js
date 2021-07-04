import React from "react";
import AddIncomeForm from "./AddIncomeForm";
import IncomeList from "./IncomeList";

function IncomeTitle() {
  return (
    <>
      <h3 className="mt-3">Income</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <IncomeList />
        </div>
      </div>
      <h4 className="mt-3">Add Income</h4>
      <div className="row mt-3">
        <div className="col-sm">
          <AddIncomeForm />
        </div>
      </div>
    </>
  );
}

export default IncomeTitle;
