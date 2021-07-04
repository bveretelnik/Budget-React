import React from "react";

function Income({ budget }) {
  return (
    <div className="alert alert-success">
      <span>Income: {budget} UAH</span>
    </div>
  );
}

export default Income;
