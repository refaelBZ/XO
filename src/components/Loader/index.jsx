import { RotatingLines } from "react-loader-spinner";
import styles from "./style.module.css";

function Loader({ height = 100, width = 100 }) {
  return (
    <div>
      <RotatingLines
        strokeColor="#fcd015"
        visible={true}
        height={height}
        width={width}
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
