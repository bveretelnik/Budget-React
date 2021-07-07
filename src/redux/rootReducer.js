import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { expenseReducer } from "./expenseReducer";
import { incomeReducer } from "./incomeReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
  expenseReducer: expenseReducer,
  incomeReducer: incomeReducer,
  themeReducer: themeReducer,
  alertReducer: alertReducer,
});
