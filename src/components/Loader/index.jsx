import { RotatingLines } from "react-loader-spinner";
import styles from "./style.module.css";

function Loader() {
  return (
    <div>
      {" "}
      <RotatingLines
        strokeColor="yellow"
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="8"
        animationDuration="3"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
