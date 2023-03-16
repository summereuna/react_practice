import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

//렌더링을 위한 별개의 로직 사용(이렇게도 쓸 수 있다!)
const ExpensesList = (props) => {
  //비용이 없으면 h2 태그 렌더링하도록 h2 리턴시키기
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">지출한 비용이 없습니다.</h2>;
  }
  //비용 있으면 ExpenseItem 컴포넌트에 비용 데이터 매핑하여 렌더링
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          id={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
