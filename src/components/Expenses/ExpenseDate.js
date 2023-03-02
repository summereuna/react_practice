//비용 지출한 날짜 달력 형태로 보여주는 컴포넌트
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  //jsx 중괄호 안에 JS 코드 쓰는 것 보다 이렇게 위로 꺼내서 상수에 넣어서 사용하는 것이 훨씬 클린하다.
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "numeric" });
  const year = props.date.toLocaleString("ko-KR", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
