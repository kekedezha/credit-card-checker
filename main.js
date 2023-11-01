// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//validateCred function takes an array of numbers of a given credit card and checks to see if they are valid.
const validateCred = inputArray => {
    let creditDigitSum = 0;

    if (inputArray.length%2 === 0) {
        // console.log("Array length is even.");
        for (let x = (inputArray.length - 1); x >=0; x--) {
            let tempVar;
            if(x % 2 === 0) {
                tempVar = inputArray[x] * 2;
                if(tempVar > 9){
                    tempVar = tempVar - 9;
                }
                creditDigitSum = creditDigitSum + tempVar;
            } else {
                creditDigitSum = creditDigitSum + inputArray[x];
            }
        }
    } else {
        // console.log("Array length is odd.");
        for (let x = (inputArray.length - 1); x >=0; x--) {
            let tempVar;
            if(x % 2 === 1) {
                tempVar = inputArray[x] * 2;
                if(tempVar > 9){
                    tempVar = tempVar - 9;
                }
                creditDigitSum = creditDigitSum + tempVar;
            } else {
                creditDigitSum = creditDigitSum + inputArray[x];
            }
        }
    }
    
    if (creditDigitSum % 10 === 0) {
        // console.log('Credit Card is valid!');
        return true;
    } else {
        // console.log('Credit Card is NOT valid!');
        return false;
    }
}

//findInvalidCards takes a nested array of credit card numbers and checks which cards are invalid. Returns invalid cards in a nested array.
const findInvalidCards = nestedArrInput => {
    let returnArray = [];
    for(let x = 0; x < nestedArrInput.length; x++) {
        if (!validateCred(nestedArrInput[x])) {
            returnArray.push(nestedArrInput[x]);
        }
    }
    return returnArray;
}

//idInvalidCardCompanies identifies credit card companies who have sent invalid credit cards. 
const idInvalidCardCompanies = nestedArrInput => {
    let returnArray = [];
    nestedArrInput.forEach(element => {
        if(element[0] === 3) {
            if (!returnArray.some(element => element === 'Amex (American Express)')) {
                returnArray.push('Amex (American Express)');
            }
        }else if (element[0] === 4){
            if (!returnArray.some(element => element === 'Visa')) {
                returnArray.push('Visa');
            }
        }else if (element[0] === 5){
            if (!returnArray.some(element => element === 'Mastercard')) {
                returnArray.push('Mastercard');
            }
        }else if (element[0] === 6){
            if (!returnArray.some(element => element === 'Discover')) {
                returnArray.push('Discover');
            }
        }else {
            if (!returnArray.some(element => element === 'Company not found')) {
                returnArray.push('Company not found');
            }
        }
    });
    return returnArray;
}
console.log(idInvalidCardCompanies(findInvalidCards(batch)));






