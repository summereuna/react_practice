import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Modal from "../modal/Modal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  //모달 창 관련 메시지
  const [error, setError] = useState();

  const changeUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const changeUserAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(userName);

    // //유효한 입력값인지 체크
    // if (!userName && !userAge) {
    //   props.onOpenInvalidModal();
    //   props.onChangeModalTitle("Invalid");
    //   props.onChangeModalContent("Please enter name and age.");
    //   return;
    // } else if (!userName) {
    //   props.onOpenInvalidModal();
    //   props.onChangeModalTitle("Invalid");
    //   props.onChangeModalContent("Please enter a name.");
    //   return;
    // } else if (!userAge) {
    //   props.onOpenInvalidModal();
    //   props.onChangeModalTitle("Invalid");
    //   props.onChangeModalContent("Please enter an age.");
    //   return;
    // }

    // if (userAge <= 0) {
    //   props.onOpenInvalidModal();
    //   props.onChangeModalTitle("Invalid");
    //   props.onChangeModalContent("Please enter a valid age (> 0).");
    //   return;
    // }

    //공백
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    //1보다 작은 경우
    // + 붙여서 숫자형 확실히 해주기
    if (+userAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    //state 결합
    const newUserData = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    };
    props.onAddUserData(newUserData);
    /* 결합 안하고 데이터 보내려면 그냥 이렇게 보내면 됨
    props.onAddUserData(userName, userAge);
    */
    //저장 후 input 비우기
    setUserName("");
    setUserAge("");
  };

  //error 초기화해서 모달창 안뜨게
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          content={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={styles.form}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            onChange={changeUserNameHandler}
            value={userName}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            onChange={changeUserAgeHandler}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
