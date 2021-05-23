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

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onSelectYear={handleSelectYear} />
      {props.expenses.map((ex) => (
        <ExpenseItem {...Object.assign(ex, { key: ex.id })} />
      ))}
    </Card>
  );
}
