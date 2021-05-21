import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem {...props.expenses[0]} />
      <ExpenseItem {...props.expenses[1]} />
      <ExpenseItem {...props.expenses[2]} />
      <ExpenseItem {...props.expenses[3]} />
    </Card>
  );
}
