import { RotatingLines } from "react-loader-spinner";
import X from "../components/X";
import O from "../components/O";
import { useState } from "react";

export default function Kobi() {
  const [board, setBoard] = useState[([0, 0, 0], [0, 0, 0], [0, 0, 0])];
  const [player, setPlayer] = useState("X");
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
