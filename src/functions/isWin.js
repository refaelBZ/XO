// פונקציית בדיקת ניצחון 
const isWin = (boardArr, currentPlayer) => {
    const size = boardArr.length;

    // Rows
    for (let i = 0; i < size; i++) {
      let allMatch = true;
      for (let j = 0; j < size; j++) {
        if (currentPlayer && boardArr[j][i] !== currentPlayer) {
          allMatch = false;
          break;
        }
      }
      if (allMatch && currentPlayer) {
        console.log("Row Winner", currentPlayer);
        return currentPlayer;
      }
    }

    // Columns
    for (let j = 0; j < size; j++) {
      let allMatch = true;

      for (let k = 0; k < size; k++) {
        if (boardArr[j][k] !== currentPlayer) {
          allMatch = false;
          break;
        }
      }
      if (allMatch && currentPlayer) {
        console.log("Col Winner", currentPlayer);
        return currentPlayer;
      }
    }

    // First Diagonal (top-left to bottom-right)
    let diagonalMatch = true;
    for (let i = 0; i < size; i++) {
      if (boardArr[i][i] !== currentPlayer) {
        diagonalMatch = false;
        break;
      }
    }
    if (diagonalMatch && currentPlayer) {
      console.log("First DIag Winner", currentPlayer);
      return currentPlayer;
    }

    // Second Diagonal (top-right to bottom-left)
    diagonalMatch = true;
    for (let i = 0; i < size; i++) {
      if (boardArr[i][size - 1 - i] !== currentPlayer) {
        diagonalMatch = false;
        break;
      }
    }
    if (diagonalMatch && currentPlayer) {
      console.log("Second Diag Winner", currentPlayer);
      return currentPlayer;
    }

    // No winner found
    return;
  };


  export default isWin;