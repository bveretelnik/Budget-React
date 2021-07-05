import { ADD_INCOME, FETCH_INCOME, REMOVE_INCOME } from "./types";

const initialState = {
  incomeList: [],
};

export const incomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INCOME:
      return {
        ...state,
        incomeList: payload,
      };
    case ADD_INCOME:
      return {
        ...state,
        incomeList: [...state.incomeList, payload],
      };
    case REMOVE_INCOME:
      return {
        ...state,
        incomeList: state.incomeList.filter((income) => income.id !== payload),
      };
    default:
      return state;
  }
};
