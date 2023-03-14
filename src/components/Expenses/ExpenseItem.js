import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//비용(expense) 아이템 컴포넌트
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
