import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Remainder from "./components/Remainder";
import ExpenseTitle from "./components/title/expense/ExpenseTitle";
import IncomeTitle from "./components/title/income/IncomeTitle";

function App() {
  const { expensesList: expenses, budget } = useSelector(
    (state) => state.expenseReducer
  );

  const expense = expenses.reduce((acc, cur) => {
    acc += cur.cost;
    return acc;
  }, 0);

  return (
    <Router>
      <div className="container">
        <h1 style={{ textAlign: "center" }} className="mt-3 ">
          My Budget
        </h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Income budget={budget} />
          </div>
          <div className="col-sm">
            <Expense expense={expense} />
          </div>
          <div className="col-sm">
            <Remainder budget={budget} expense={expense} />
          </div>
        </div>

        <div className="container">
          <div className="row mt-3">
            <button type="button" className="btn btn-success">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/income"
              >
                Income Title
              </Link>
            </button>
          </div>
          <div className="row mt-3">
            <button type="button" className="btn btn-danger">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/expense"
              >
                Expenses Title
              </Link>
            </button>
          </div>
        </div>
        <Switch>
          <Route exact path="/expense">
            <ExpenseTitle />
          </Route>
          <Route path="/income">
            <IncomeTitle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
