// Challenge Project: Credit Card Validator
// Overview
// This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

// Project Goals
// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!



// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:


// Add your functions below:

function validateCred(arr) {
    // Remove the last value
    const lastvalue = arr.slice(-1)[0];
    // A copy of the array to operate with
    const oparr = arr.slice(0, -1);
    //reverse the array
    oparr.reverse();
  
    // Multiply two at odd positions
    oparr.unshift(1);
    oparr.forEach((itm, idx, arr) => {
      idx % 2 !== 0 ? (arr[idx] = itm * 2) : (arr[idx] = itm);
    });
    oparr.shift();
    
    //Subtract 9 from values greater than 9
    oparr.forEach((itm, idx, arr) => {
      itm > 9 ? (arr[idx] = itm - 9) : (arr[idx] = itm);
    });
  
    // Add all the values plus the lastvalue
    const sum = oparr.reduce((a, b) => a + b, lastvalue);
  
    if (sum % 10 === 0) {
      return true;
    }
    return false;
  }
  
  
  
function findInvalidCards(arrs) {
    const invalids = [];
    arrs.forEach(itm => {
        if(validateCred(itm)===false){invalids.push(itm)}
    })
    return invalids;
}
  
  
  
  
function idInvalidCardCompanies(invalidarr) {
    const result = [];
    invalidarr.forEach(itm => {
      switch(true) {
        case itm[0] === 3 : return result.push("Amex (American Express)");
        case itm[0] === 4 : return result.push("Visa") ;
        case itm[0] === 5 : return result.push("Mastercard");
        case itm[0] === 6 : return result.push("Discover") ;
        default : return result.push("Company not found") 
      }
    })
  
    const invalidCompanies = [];
    result.forEach(itm => {
      if(!invalidCompanies.includes(itm)) {
          invalidCompanies.push(itm)
        }
    })
  
    return invalidCompanies
}
  
  
  
const invalidCards = findInvalidCards(batch);
console.log(invalidCards);
const badCompanies = idInvalidCardCompanies(invalidCards);
console.log(badCompanies);





