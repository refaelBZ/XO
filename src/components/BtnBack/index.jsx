import styles from "./style.module.css";
import { IoArrowUndoOutline } from "react-icons/io5";

export default function BtnBack({
  className = "save",
  onClick = () => {},
  onsubmit = () => {},
  ...attr
}) {
  return (
    <button className={styles.btn} onClick={onClick} {...attr}>
      <IoArrowUndoOutline className={styles.icon} size="100" color="#fbb500" />
    </button>
  );
}
