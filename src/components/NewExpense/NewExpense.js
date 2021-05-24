import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);

  const handleShowForm = (e) => {
    setIsShown(!isShown);
  };

  let content = <button onClick={handleShowForm}>Add New Expense</button>;

  if (isShown) {
    content = (
      <ExpenseForm
        onAddExpense={props.onAddExpense}
        toggleForm={handleShowForm}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
