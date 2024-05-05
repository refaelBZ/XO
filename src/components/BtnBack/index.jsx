import styles from "./style.module.css";

export default function BtnBack({
  content = "תוכן ",
  className = "save",
  onClick = () => {},
  onsubmit = () => {},
  ...attr
}) {
  return (
    <button className={styles.btn} onClick={onClick} {...attr}>
      {content}
    </button>
  );
}