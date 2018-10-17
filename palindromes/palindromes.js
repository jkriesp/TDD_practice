const palindromes = function(arg) {
    
    let word = "";
    let wordCompare = "";

    // toLowerCase so we only have to wory about 
    // one part of the ASCII table
    arg = arg.toLowerCase();

    // clean the word before comparing. We only need to compare
    // letters. Not other characters
    for (let i = arg.length - 1; i >= 0; i--) {         
        if (arg.charCodeAt(i) >= 97 && arg.charCodeAt(i) <= 122) {
            word += arg.charAt(i)
        }
    }
    // reverse the string again to compare
    for (let i = word.length - 1; i >= 0; i--) {         
        
            wordCompare += word.charAt(i)
        
    }
    // final compare. Palindrome if true!
    if (word == wordCompare) {
        return true;
    } else return false;

}

module.exports = palindromes
