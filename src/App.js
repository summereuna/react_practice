import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  //여러개의 비용 아이템이 들어있는 배열
  const expenses = [
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

  //expense 배열에 data 객체 추가하는 함수
  const addExpenseHandler = (newExpense) => {
    console.log("@ App.js");
    console.log(newExpense);
    // expense 배열에 data 객체 추가하는 함수 만들기
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
