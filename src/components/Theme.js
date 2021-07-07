import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme } from "../redux/actions";

function Theme() {
  const { theme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const handleChange = () => {
    return theme ? dispatch(darkTheme()) : dispatch(lightTheme());
  };

  return (
    <>
      <div className="form-check form-switch">
        <input
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Check the theme
        </label>
      </div>
    </>
  );
}

export default Theme;
