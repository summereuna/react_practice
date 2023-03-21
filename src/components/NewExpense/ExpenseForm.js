import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //이벤트 타겟 값 항상 string으로 읽으니까 초기값 다 ""으로 하자구
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //2. state 결합하기: 제출된 폼의 내용을 모두 담은 객체 생성
    const expenseData = {
      title: enteredTitle,
      //여러 값을 추가할 때 해당 값은 숫자가 아닌 문자열로 추가됩니다. 고치는 것은 쉽습니다. 단순히 숫자 변환을 실행하면 됩니다:
      amount: +enteredAmount,
      //날짜 생성자로 날짜 생성 후, 해당 날짜 문자열 분석하여 날짜 객체로 변환한 enteredDate 전달
      date: new Date(enteredDate),
    };

    //부모 컴포넌트로 입력받은 데이터 전달
    props.onSaveExpenseData(expenseData);

    //양방형 바인딩으로 submit 후 form에 입력된 값 화면에서 없애기
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="new-expense-name">물품</label>
          <input
            type="text"
            id="new-expense-name"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="new-expense-amount">금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="new-expense-amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="new-expense-date">날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            id="new-expense-date"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button type="submit">비용 추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
