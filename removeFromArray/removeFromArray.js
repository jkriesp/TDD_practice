const removeFromArray = function () {
    let array = arguments[0];

    // Iterate through however many arguments there are
    for (let i = 1; i <= arguments.length; i++) {
        // Iterate through the array in argument[0] and compare with other arguments
        for (let n = 0; n < array.length; n++) {
            // Use splice() to remove the item and readjust the index.
            if (arguments[i] == array[n]) {
                array.splice(n, 1);
            }
        }
    }
    return array;
}

module.exports = removeFromArray
