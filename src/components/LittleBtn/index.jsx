import styles from "./style.module.css";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function LittleBtn({ type }) {
  const navigate = useNavigate();

  return type == "back" ? (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <TbArrowBackUp className={styles.icon} size="100%" />
    </button>
  ) : type == "V" ? (
    <button className={styles.btn} onClick={() => navigate("/menu")}>
      <FaCheck className={styles.icon} size="100%" />
    </button>
  ) : (
    <button className={styles.btn} onClick={() => navigate("/setting")}>
      <IoSettingsOutline className={styles.icon} size="100%" />
    </button>
  );
}
