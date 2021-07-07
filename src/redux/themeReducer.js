import { DARK_THEME, LIGHT_THEME } from "./types";

const initialState = {
  theme: true,
};

export const themeReducer = (state = initialState, { type }) => {
  switch (type) {
    case LIGHT_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case DARK_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
