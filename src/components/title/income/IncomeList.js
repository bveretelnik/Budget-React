import React from "react";
import { useSelector } from "react-redux";
import IncomeItem from "./IncomeItem";

function IncomeList() {
  const { incomeList: incomes } = useSelector((state) => state.expenseReducer);
  return (
    <>
      <ul className="list-group mt-3 mb-3">
        {incomes &&
          incomes.map((income) => (
            <IncomeItem
              key={income.id}
              id={income.id}
              name={income.name}
              cost={income.cost}
            />
          ))}
      </ul>
    </>
  );
}

export default IncomeList;
