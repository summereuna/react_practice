import styles from "./Modal.module.css";

const Modal = (props) => {
  const onClickModal = () => {
    props.onCloseModal((prev) => !prev);
  };
  return (
    <div className={`${styles["modal-out-box"]}`}>
      <div className={`${styles["modal-in-box"]}`}>
        <div className={`${styles["modal-in-box__title"]}`}>{props.title}</div>
        <div className={`${styles["modal-in-box__content"]}`}>
          {props.content}
          <button
            className={`${styles["modal-in-box__btn"]}`}
            onClick={onClickModal}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
