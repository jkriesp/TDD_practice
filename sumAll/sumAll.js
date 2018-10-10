const sumAll = function () {
    let sum = 0;
    // Check first for valid integer input
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number" ||
            arguments[i] <= 0) {
            return "ERROR";
        }
    }
    // Check if arguments are in unusual order from high to low
    if (arguments[0] > arguments[1]) {
        for (let n = arguments[1]; n <= arguments[0]; n++) {
            sum += n;
        }
    } else {
        // Else we add numbers the regular way, from small to big
        for (let n = arguments[0]; n <= arguments[1]; n++) {
            sum += n;
        }
    }
    return sum;
}

module.exports = sumAll
