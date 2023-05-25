import React from "react";

// 1. react-dom 라이브러리에 있는 portals을 사용하기 위해 react-dom을 임포트 한다.
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

//2-1. backdrop 클래스 가진 JSX 반환하는 컴포넌트
//     -> backdrop-root로 포털되게하기
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

//2-2. modal 클래스 가진 JSX 반환하는 컴포넌트
//     -> overlay-root로 포털되게하기
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

// 3. Portal사용하여 Real DOM의 다른 위치로 ReactDOM을 보내기
//{ReactDOM.createPortal(리액트돔-JSX, 리얼돔 위치-DOM API)}
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
