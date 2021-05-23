import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return props.expenses.map((ex) => (
    <ul className="expenses-list">
      <ExpenseItem {...Object.assign(ex, { key: ex.id })} />
    </ul>
  ));
};

export default ExpensesList;
