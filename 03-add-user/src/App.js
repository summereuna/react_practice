import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
// import Modal from "./components/modal/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([
    { id: "0912", name: "RM", age: 30 },
    { id: "0218", name: "hobi", age: 30 },
  ]);

  const addUserHandler = (newUser) => {
    setUserList((prev) => {
      return [...prev, newUser];
    });
  };
  /*
  const addUserHandler = (userName, userAge) => {
    setUserList((prev) => {
      return [...prev, {
        name: userName,
        age: userAge,
        id: Math.random().toString()
      }]
    });
  };

  const [isValid, setIsValid] = useState(true);

  const toggleInvalidModal = () => {
    setIsValid((prev) => !prev);
  };

  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const changeModalTitle = (title) => {
    setModalTitle(title);
  };

  const changeModalContent = (content) => {
    setModalContent(content);
  };
  */

  return (
    <div>
      <AddUser
        onAddUserData={addUserHandler}
        // onOpenInvalidModal={toggleInvalidModal}
        // onChangeModalTitle={changeModalTitle}
        // onChangeModalContent={changeModalContent}
      />
      <UserList userList={userList} />
      {/* {!isValid && (
        <Modal
          title={modalTitle}
          content={modalContent}
          onCloseModal={toggleInvalidModal}
        />
      )} */}
    </div>
  );
}

export default App;
