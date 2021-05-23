import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const handleSelectYear = (year) => {
    setYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onSelectYear={handleSelectYear} />
      <ExpenseItem {...props.expenses[0]} />
      <ExpenseItem {...props.expenses[1]} />
      <ExpenseItem {...props.expenses[2]} />
      <ExpenseItem {...props.expenses[3]} />
    </Card>
  );
}
