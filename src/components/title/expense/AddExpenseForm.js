import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addExpense, hideAlert, showAlert } from "../../../redux/actions";

function AddExpenseForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      name,
      cost: parseInt(cost),
      key: uuidv4(),
    };
    dispatch(addExpense(expense));
    dispatch(showAlert());
    setName("");
    setCost("");
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-outline-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
