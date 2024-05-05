import styles from "./style.module.css";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BtnBack() {
  let navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <IoArrowUndoOutline className={styles.icon} size="100" color="#fbb500" />
    </button>
  );
}
