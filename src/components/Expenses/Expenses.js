import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //컴포넌트에서 이미 props.items으로 데이터를 가지고 있으면 이를 활용하면된다.
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilterYear={filterChangedYearHandler}
        //양방향 바인딩: state select value로 넣기 위해 props으로 보내기
        selected={filteredYear}
      />
      <ExpenseChart filteredExpenses={filteredExpenses} />
      {<ExpensesList filteredExpenses={filteredExpenses} />}
    </Card>
  );
};

export default Expenses;
