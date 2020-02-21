module.exports = function reverse (n) {
    
    let rev = n.toString().split("").reverse().join("");
    let num = parseInt(rev);

    return num;
}
