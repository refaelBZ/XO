import { create } from 'zustand';

export const useGameStore = create((set) => ({
  currentPlayer: 'X', // מי בתור
  mySymbol: 'X', // הסימן שהמשתמש הנוכחי קיבל
  opponentSymbol: 'O', // הסימן של היריב
  myName: '', // השם שלך
  opponentName: 'Lushka', // השם של היריב
  winnerName: '', // השם של המנצח
  player: '',


  //בחירת שחקן
  setPlayer: (player) => {
    set({ player });
  },
  setCurrentPlayer: (player) => {
    set({ currentPlayer: player });
  },


  // החלפת השחקן 
  togglePlayer: () => set((state) => ({
    currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
  })),

  // הגדרת סימנים לשחקן הנוכחי וליריבו
  setPlayerSymbols: (mySymbol) => {
    set({
      mySymbol,
      opponentSymbol: mySymbol === 'X' ? 'O' : 'X'
    });
  },

  // הגדרת שמות עבור השחקנים
  setPlayerNames: (myName, opponentName) => {
    set({
      myName,
      opponentName
    });
  },



  // setRoomCode: (newRoomCode) => set({ roomCode: newRoomCode }),

  // עדכון שם המנצח
  setWinnerName: (name) => set({ winnerName: name })
}));
