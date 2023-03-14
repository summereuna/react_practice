import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//(연습용 데이터 더미: 외부에 작성, 상태 초기화 하는데 사용) 여러개의 비용 아이템이 들어있는 배열
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  //expenses 관리하는 state, DUMMY_EXPENSES 초기 값으로 설정
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //expense에 data 추가하는 함수
  const addExpenseHandler = (newExpense) => {
    // 최신 스냅샷 기반으로 상태 업데이트하기
    setExpenses((prevExpenses) => {
      //newExpense를 배열 제일 앞에 넣는 케이스: 화면 상단 표시
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

//App 함수 내보내기
export default App;
