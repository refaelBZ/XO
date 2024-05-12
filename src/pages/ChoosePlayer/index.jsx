import { useNavigate } from "react-router-dom";
import LittleBtn from "../../components/LittleBtn";
import WhiteBoard from "../../components/WhiteBoard";
import Blue_Square from "../../components/Blue_square";
import { useGameStore } from "../../store";

export default function ChoosePlayer() {
  const navigate = useNavigate();
  const setPlayer = useGameStore((state) => state.setPlayer);
  const setCurrentPlayer = useGameStore((state) => state.setCurrentPlayer);
  const player = useGameStore((state) => state.player);

  const setPlayerSymbols = useGameStore((state) => state.setPlayerSymbols);
  const setPlayerNames = useGameStore((state) => state.setPlayerNames); // שליפת פונקציית עדכון שמות מה-store
  const myName = useGameStore((state) => state.myName); // שליפת השם הנוכחי מה-store
  const opponentName = useGameStore((state) => state.opponentName);

  const [player, setPlayer] = useState("");

  const chooseClick = (value) => {
    setPlayer(value);
    setCurrentPlayer(value);
    setPlayerSymbols(value);
  };

  console.log({ player });

  const handleNav = () => {
    if (player) {
      navigate("/board");
    }
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    setPlayerNames(newName, opponentName);
  };

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.back}>
          <LittleBtn />
        </div>
        <div className={styles.title}>Choose player</div>
      </div>

      <WhiteBoard>
        <div className={styles.choose}>
          <div className={player === "O" ? styles.gray : styles.choose}>
            <Blue_Square value="X" onClick={() => chooseClick("X")} />
          </div>
          <div className={player === "X" ? styles.gray : styles.choose}>
            <Blue_Square value="O" onClick={() => chooseClick("O")} />
          </div>
        </div>
      </WhiteBoard>

      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <WhiteBoard>
            <input
              type="text"
              placeholder="Enter your name"
              value={myName} // הצגת השם מה-store
              onChange={handleChange}
            />
          </WhiteBoard>
        </div>
      </div>
      <div>{player && <Button content="LETS PLAY" onClick={handleNav} />}</div>
    </div>
  );
}
