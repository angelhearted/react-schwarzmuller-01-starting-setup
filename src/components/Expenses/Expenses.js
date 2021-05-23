import { useState } from "react";
import Card from "../UI/Card";
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
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
