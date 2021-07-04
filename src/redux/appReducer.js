import { ADD_EXPENSE, FETCH_EXPENSES, REMOVE_EXPENSE } from "./types";

const initialState = {
  budget: 44000,
  expensesList: [],
  incomeList: [
    { id: 1, name: "Salary", cost: 20000 },
    { id: 2, name: "React js develop", cost: 20000 },
  ],
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EXPENSES:
      return {
        ...state,
        expensesList: payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expensesList: [...state.expensesList, payload],
      };
    case REMOVE_EXPENSE:
      return {
        state,
        expensesList: state.expensesList.filter(
          (expense) => expense.id !== payload
        ),
      };
    default:
      return state;
  }
};
