import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //컴포넌트에서 이미 props.items으로 데이터를 가지고 있으면 이를 활용하면된다.
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  //<ExpenseItem /> 컴포넌트를 매핑할 때, 매핑할 배열로 필터링된 filteredExpenses울 보내면 된다.

  //변수에 JSX 컨텐츠를 기본값 할당 및 저장할 수 있다.
  let expenseContent = <div>지출한 비용이 없습니다.</div>;
  //그리고 JSX 반환하기 전 if문으로 체크
  if (filteredExpenses.length > 0) {
    //expenseContent에 오버라이드(겹쳐쓰기, 값 변경)
    expenseContent = filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        id={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilterYear={filterChangedYearHandler}
        //양방향 바인딩: state select value로 넣기 위해 props으로 보내기
        selected={filteredYear}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
