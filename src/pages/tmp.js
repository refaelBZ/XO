


//שורות
function isRowIdentical(row) {
    let firstValue = row[0];
    for (let value of row) {
        if (value !== firstValue) {
            return false;
        }
    }
    return true;
}


for (let i = 0; i < arr.length; i++) {

    if (isRowIdentical(arr[i])) {
        console.log(`שורה ${i+1} היא שורה זהה`);
    }
}

//עמודות

function isColIdentical(column, index) {
    let firstValue = column[0];

    for (let i = 1; i < column.length; i++) {
        if (column[i] !== firstValue) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < arr[0].length; i++) {
    //הופך את העמודה לשורה
    let column = arr.map(row => row[i]);

    if (isColIdentical(column)) {
        console.log(`Col  ${i} is a win!`);
    } else {
        console.log(`Col ${i} isn't a win/:`);
    }
}


//אלכסון




function isDiagIdentical(arr) {
    let firstValue = arr[0][0];
    for (let i = 1; i < arr[0].length; i++) {
        if (arr[i][i] !== firstValue) {
            return false;
        }
    }
    return true;
}

if (isDiagIdentical(arr)) {
    console.log("האלכסון הראשי הוא אלכסון זהה");
} else {
    console.log("האלכסון הראשי אינו אלכסון זהה");
}





//אלכסון שני

let arr = [
    ["O", "O", "X"],
    ["X", "X", "X"],
    ["X", "X", "O"]
];

function isSecDiagIdentical(arr) {
    let secondDiag = arr[0][arr.length - 1];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][arr.length - 1 - i] !== secondDiag) {
            return false;
        }
    }
    return true;
}

if (isSecDiagIdentical(arr)) {
    console.log("האלכסון השני הוא אלכסון זהה");
} else {
    console.log("שני האלכסונים אינם אלכסונים זהים");
}





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
