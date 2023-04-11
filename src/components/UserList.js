import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.userList}>
      {props.userList.map((user) => (
        <User key={user.id} id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
