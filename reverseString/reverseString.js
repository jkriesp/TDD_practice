const reverseString = function(string) {
    let rev_string = "";
    for (i = string.length; i >= 0; i--) {
        rev_string += string.charAt(i);
    }
    return rev_string;
}

module.exports = reverseString
