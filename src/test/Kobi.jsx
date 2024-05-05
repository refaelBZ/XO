import { RotatingLines } from "react-loader-spinner";
import X from "../components/X";
import O from "../components/O";

export default function Kobi() {
  return (
    <div>
      <h2>Welcome to Kobi's Component</h2>
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
      <O />
      <X />
    </div>
  );
}
