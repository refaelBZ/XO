import X from "../components/X";
import Loader from "../components/Loader";
import O from "../components/O";
import { useState } from "react";
import Game_board from "../components/GameBoard";

export default function Kobi() {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [player, setPlayer] = useState("X");
  return (
    <div>
      <h2>Welcome to Kobi's Component</h2>
      {/* <Loader /> */}
      <Game_board />
      <O />
      <X />
    </div>
  );
}
