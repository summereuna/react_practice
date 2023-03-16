import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

//사용자들이 비용 데이터 입력할 수 있는 입력 창
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    //ExpenseForm에서 입력된 data를 매개변수로 받아 복사
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //상위 컴포넌트에서 props으로 받은 함수에 저장할 data 인자로 전달
    props.onAddExpenseData(expenseData);
    //폼에 저장하고 나면 에디팅창 끄기
    setIsEditing((prev) => !prev);
  };

  const startEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const stopEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  console.log(isEditing);
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>새로운 비용 추가</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}{" "}
    </div>
  );
};

export default NewExpense;
