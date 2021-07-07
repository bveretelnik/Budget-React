import { HIDE_ALERT, SHOW_ALERT } from "./types";

const initialState = {
  show: false,
};

export const alertReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_ALERT:
      return {
        show: !state.show,
      };
    case HIDE_ALERT:
      return {
        show: !state.show,
      };
    default:
      return state;
  }
};
