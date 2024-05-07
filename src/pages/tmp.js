const isWin = (boardArr) => {
    const size = boardArr.length;

    // Rows
    for (let i = 0; i < size; i++) {
        const firstCell = boardArr[i][0];
        if (firstCell && boardArr[i].every(cell => cell === firstCell)) {
            return firstCell;
        }
    }

    // Columns
    for (let j = 0; j < size; j++) {
        const firstCell = boardArr[0][j];
        let allMatch = true;

        for (let k = 0; k < size; k++) {
            if (boardArr[k][j] !== firstCell) {
                allMatch = false;
                break;
            }
        }
        if (allMatch && firstCell) {
            return firstCell;
        }
    }

    // First Diagonal (top-left to bottom-right)
    const firstDiagonalCell = boardArr[0][0];
    let diagonalMatch = true;
    for (let i = 1; i < size; i++) {
        if (boardArr[i][i] !== firstDiagonalCell) {
            diagonalMatch = false;
            break;
        }
    }
    if (diagonalMatch && firstDiagonalCell) {
        return firstDiagonalCell;
    }

    // Second Diagonal (top-right to bottom-left)
    const firstReverseDiagonalCell = boardArr[0][size - 1];
    diagonalMatch = true;
    for (let i = 1; i < size; i++) {
        if (boardArr[i][size - 1 - i] !== firstReverseDiagonalCell) {
            diagonalMatch = false;
            break;
        }
    }
    if (diagonalMatch && firstReverseDiagonalCell) {
        return firstReverseDiagonalCell;
    }

    // No winner found
    return null;
};

let arr = [
    ["X", "O", "O"],
    ["X", "X", "X"],
    ["X", "X", "X"]
];

console.log('Winner:', isWin(arr));

















// //שורות
// function isRowIdentical(row) {
//     let firstValue = row[0];
//     for (let value of row) {
//         if (value !== firstValue) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 0; i < arr.length; i++) {

//     if (isRowIdentical(arr[i])) {
//         console.log(`שורה ${i+1} היא שורה זהה`);
//     }
// }










// //עמודות
// function isColIdentical(column, index) {
//     let firstValue = column[0];

//     for (let i = 1; i < column.length; i++) {
//         if (column[i] !== firstValue) {
//             return false;
//         }
//     }
//     return true;
// }
// for (let i = 0; i < arr[0].length; i++) {
//     //הופך את העמודה לשורה
//     let column = arr.map(row => row[i]);

//     if (isColIdentical(column)) {
//         console.log(`Col  ${i} is a win!`);
//     } else {
//         console.log(`Col ${i} isn't a win/:`);
//     }
// }


// //אלכסון

// function isDiagIdentical(arr) {
//     let firstValue = arr[0][0];
//     for (let i = 1; i < arr[0].length; i++) {
//         if (arr[i][i] !== firstValue) {
//             return false;
//         }
//     }
//     return true;
// }

// if (isDiagIdentical(arr)) {
//     console.log("האלכסון הראשי הוא אלכסון זהה");
// } else {
//     console.log("האלכסון הראשי אינו אלכסון זהה");
// }





// //אלכסון שני



// function isSecDiagIdentical(arr) {
//     let secondDiag = arr[0][arr.length - 1];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i][arr.length - 1 - i] !== secondDiag) {
//             return false;
//         }
//     }
//     return true;
// }

// if (isSecDiagIdentical(arr)) {
//     console.log("האלכסון השני הוא אלכסון זהה");
// } else {
//     console.log("שני האלכסונים אינם אלכסונים זהים");
// }





// function isColIdentical(column, index) {
//     let firstValue = column[0];

//     for (let i = 1; i < column.length; i++) {
//         if (column[i] !== firstValue) {
//             return false;
//         }
//     }
//     return true;
// }



// for (let i = 0; i < arr[0].length; i++) {

//     let column = arr.map(row => row[i]);

//     if (isColIdentical(column, i)) {
//         console.log(`העמודה ${i} היא עמודה זהה`);
//     } else {
//         console.log(`העמודה ${i} אינה עמודה זהה`);
//     }
// }




//************** */

//[col][row]

// for (let i = 0; i < arr[0].length; i++) {
//     //עמודה ראשונה
//     let firstValue = arr[0][i];
//     //
//     let isIdentical = true;

//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j][i] !== firstValue) {
//             isIdentical = false;
//             break;
//         }
//     }

//     if (isIdentical) {
//         console.log(`העמודה ${i} היא עמודה זהה`);
//     } else {
//         console.log(`העמודה ${i} אינה עמודה זהה`);
//     }
// }
