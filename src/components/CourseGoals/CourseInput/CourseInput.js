import React, { useState } from "react";

import Button from "../../UI/Button/Button";
//import "./CourseInput.css";
import styled from "styled-components";

//JSX에서 컴포넌트로 사용할 것이기 때문에 대문자로 작성
//스타일 컴포넌트 패키지 사용: JSX의 div 부분 대체
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background-color: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;

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

  //이미 스타일에 form-control에 해당하는 스타일이 첨부되었기 때문에 form-control 클래스를 설정할 필요가 없다.
  //다만 유효한지 아닌지를 체크하여 유효하지 않다면 invalid를 추가하면 된다.
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid ? "invalid" : ""}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

/*
2. 동적 props
이 파일에서만 사용할 수 있는 스타일컴포넌트를 원한다면 그 파일에서만 생성하면 된다.
지금까지는 파일별로 하나의 컴포넌트를 가졌는데, 일반적으로 그대로 유지하면 좋다.
하지만 파일에서, 다른 컴포넌트에도 사용되는 컴포넌트를 가지고 있다면 동일한 파일에서 그 두 컴포넌트를 가질 수도 있다.
*/
