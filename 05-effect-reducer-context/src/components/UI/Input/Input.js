import React, { forwardRef, useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  //일반 인풋에 ref 훅 사용해서 focus 메소드 호출하면 된다.
  const inputRef = useRef();

  //input에 나만의 메소드 활용해 해결하기
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { focus: activate };
  });
  //activate 함수를 input의 내부가 아닌 외부에서 호출하기 (리액트에서 흔치 않은 방식임..)

  return (
    <div
      className={`${classes.control} ${props.className} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      >
        {props.children}
      </input>
    </div>
  );
});

export default Input;

//재사용해야 하는 컴포넌트는 props으로
