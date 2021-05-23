import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const handleSelectYear = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (ex) => ex.date.getFullYear().toString() === year
  );

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((ex) => (
      <ExpenseItem {...Object.assign(ex, { key: ex.id })} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onSelectYear={handleSelectYear} />
      {expensesContent}
    </Card>
  );
}
