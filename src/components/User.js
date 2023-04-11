import styles from "./User.module.css";

const Users = (props) => {
  return (
    <div
      className={styles.user}
    >{`${props.name} (${props.age} years old)`}</div>
  );
};

export default Users;
