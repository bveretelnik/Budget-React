import React from "react";
import { useDispatch } from "react-redux";
import { hideAlert } from "../redux/actions";

function Alert({ color, name }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`alert alert-${color} alert-dismissible fade show`}
      role="alert"
    >
      The <strong>{name}</strong> is successful add.
      <button
        onClick={() => dispatch(hideAlert())}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
