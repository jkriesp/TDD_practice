const repeatString = function(hey, num) {
    finalString = hey;
    if (num === 0) {
        return "";
    }
    if (num < 0) {
        return "ERROR"
    }
    for (let i = 1; i < num; i++) {
        finalString += hey;
        
    }
    return finalString;
}

module.exports = repeatString
