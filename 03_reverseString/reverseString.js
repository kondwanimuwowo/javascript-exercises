const reverseString = function(str) {
let result = "";
let array = str.split("");
let arrayRev = array.reverse();

for (let i = 0; i < arrayRev.length; i++) {
    result += arrayRev[i];
}
return result;
};
reverseString("123! abc! Hello, Odinite.");

// Do not edit below this line
module.exports = reverseString;
