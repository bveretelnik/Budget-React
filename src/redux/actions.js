import axios from "axios";
import { ADD_EXPENSE, FETCH_EXPENSES, REMOVE_EXPENSE } from "./types";

const url = "https://budget-app-react-98168-default-rtdb.firebaseio.com/";

export const fetchExpense = () => {
  return async (dispatch) => {
    const res = await axios.get(`${url}/expenses.json`);
    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({
      type: FETCH_EXPENSES,
      payload,
    });
  };
};

export const addExpense = (expense) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/expenses.json`, expense);
      const payload = {
        ...expense,
        id: res.data.name,
      };
      return dispatch({
        type: ADD_EXPENSE,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeExpense = (id) => {
  return async (dispatch) => {
    await axios.delete(`${url}/expenses/${id}.json`);

    dispatch({
      type: REMOVE_EXPENSE,
      payload: id,
    });
  };
};
