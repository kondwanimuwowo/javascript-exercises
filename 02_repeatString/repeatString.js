const repeatString = function(string, num) {
    result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};
repeatString("h1", 1);

// Do not edit below this line
module.exports = repeatString;
