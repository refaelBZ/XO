import { create } from "zustand";

export const useGameStore = create((set) => ({
  currentPlayer: "X", // מי בתור
  mySymbol: "X", // הסימן שהמשתמש הנוכחי קיבל
  opponentSymbol: "O", // הסימן של היריב
  myName: "", // השם שלך
  opponentName: "Lushka", // השם של היריב
  winnerName: "", // השם של המנצח
  myAvatar: "", //

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
