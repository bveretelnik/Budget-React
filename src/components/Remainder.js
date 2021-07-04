import React from "react";

function Remainder({ budget, expense }) {
  return (
    <div className="alert alert-primary">
      <span>Remainder: {budget - expense} UAH</span>
    </div>
  );
}

export default Remainder;
