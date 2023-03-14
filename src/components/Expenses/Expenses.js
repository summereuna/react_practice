import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedYearHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log("selectedYear", selectedYear);
    setFilteredYear(selectedYear);
  };

  console.log("filteredYear", filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilterYear={filterChangedYearHandler}
        //양방향 바인딩: state select value로 넣기 위해 props으로 보내기
        selected={filteredYear}
      />
      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        id={props.items[3].id}
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
