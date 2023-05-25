import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    //2. 입력 값이 다시 유효해져야 하기 때문에, 리셋 기능을 설정하기 위해 모든 키 입력에 반응하는 위치로 가야 한다.
    if (event.target.value.trim().length > 0) {
      //입력값이 유효하다면 isValid상태를 true로 설정
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //1. 공백으로 입력시 목표 추가 못하게 하기: 길이 체크
    if (enteredValue.trim().length === 0) {
      //입력값이 비었으면 그냥 반환해서 함수 실행 중단시키.
      //사용자가 입력한 것이 유효한지 나타내는 지표가 되는 state를 불리언으로 사용
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
