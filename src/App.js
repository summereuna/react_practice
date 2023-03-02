import Expenses from "./components/Expenses/Expenses";

// App이라는 함수 정의
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
  return (
    //리턴문 안은 JSX 문법으로 작성(자바스트림트 안의 HTML 코드가 있는 모양)
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

//App 함수 내보내기
export default App;
