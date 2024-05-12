import { create } from "zustand";
import Avatar from "./components/Avatar";

export const useGameStore = create((set) => ({
  player: "", //שחקן
  currentPlayer: "X", // מי בתור
  mySymbol: "X", // הסימן שהמשתמש הנוכחי קיבל
  opponentSymbol: "O", // הסימן של היריב
  myName: "", // השם שלך
  opponentName: "Lushka", // השם של היריב
  winner: false,
  winnerName: "", // השם של המנצח
  board: [
    [" ", " ", " "],
    [" ", " ", " "], //לוח משחק
    [" ", " ", " "],
  ],
  p1: {
    id: "12548",
    myName: "moshe",
    mySymbol: "X",
    wins: 2,
    avatar: Avatar,
  },

  p2: {
    id: "156548",
    myName: "avi",
    mySymbol: "O",
    wins: 8,
    avatar: Avatar,
  },

  setp1: (value) => set((state) => ({ p1: { ...state.p1, ...value } })),

  setp1: (value) => set((state) => ({ p2: { ...state.p2, ...value } })),

  //בחירת שחקן
  setPlayer: (player) => {
    set({ player });
  },

  //עדכון תור שחקן
  setCurrentPlayer: (player) => {
    set({ currentPlayer: player });
  },

  // החלפת השחקן
  togglePlayer: () =>
    set((state) => ({
      currentPlayer: state.currentPlayer === "X" ? "O" : "X",
    })),

  // הגדרת סימנים לשחקן הנוכחי וליריבו
  setPlayerSymbols: (mySymbol) => {
    set({
      mySymbol,
      opponentSymbol: mySymbol === "X" ? "O" : "X",
    });
  },

  //עדכון לוח משחק
  setBoard: (newBoard) => {
    set((state) => ({ board: newBoard }));
  },

  //עדכון מנצח
  setWinner: (value) => {
    set({
      winner: value,
    });
  },
  // הגדרת שמות עבור השחקנים
  setPlayerNames: (myName, opponentName) => {
    set({
      myName,
      opponentName,
    });
  },
  // הגדרת אוואטר עבור השחקנים
  setPlayerAvatar: (myAvatar, opponentAvatar) => {
    set({
      myAvatar,
      opponentAvatar,
    });
  },

  // עדכון שם המנצח
  setWinnerName: (name) => set({ winnerName: name }),
}));
