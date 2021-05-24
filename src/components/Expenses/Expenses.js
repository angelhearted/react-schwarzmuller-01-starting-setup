import { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
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

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onSelectYear={handleSelectYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
