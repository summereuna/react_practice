import styles from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.content}</p>
          <footer className={styles.actions}>
            <Button onClick={props.onCloseModal} type="button">
              OK
            </Button>
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
