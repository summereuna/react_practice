import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//사용자들이 비용 데이터 입력할 수 있는 입력 창
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //ExpenseForm에서 입력된 data를 매개변수로 받아 복사
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    //상위 컴포넌트에서 props으로 받은 함수에 저장할 data 인자로 전달
    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
