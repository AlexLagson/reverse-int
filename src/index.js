module.exports = function reverse (n) {
    let reversedArr = [];
    let str = String(n);
    let arr = str.split('');
    

    for(let i = str.length-1; i >= 0; i--) { 
        reversedArr.push(arr[i]);
    }

    return parseInt(reversedArr.join(''));
}
