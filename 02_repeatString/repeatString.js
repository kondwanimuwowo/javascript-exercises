const repeatString = function(string, num) {
    result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    if (num < 0) {
        return "ERROR";
    } else {
        return result;
    }
};
repeatString("goodbye", 0);

// Do not edit below this line
module.exports = repeatString;
