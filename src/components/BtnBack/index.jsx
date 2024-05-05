import styles from "./style.module.css";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function BtnBack() {
  let navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <TbArrowBackUp className={styles.icon} size="100%"/>

    </button>
  );
}
