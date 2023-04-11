import { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const addUserAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userName);

    if (userAge <= 0) {
      props.onOpenInvalidModal(false);
      props.onChangeModalTitle("Invalid");
      props.onChangeModalContent("Please enter a valid age (> 0).");
    } else {
      //state 결합
      const newUserData = {
        name: userName,
        age: userAge,
        id: Math.random().toString(),
      };
      props.onAddUserData(newUserData);
      //저장 후 input 비우기
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="name">Username</label>
      <input
        type="text"
        id="name"
        onChange={addUserNameHandler}
        value={userName}
      />
      <label htmlFor="age">Age(Years)</label>
      <input
        type="number"
        id="age"
        onChange={addUserAgeHandler}
        value={userAge}
      />
      <Button type="submit" />
    </form>
  );
};

export default Form;
