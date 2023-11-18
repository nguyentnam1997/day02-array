//bài 1
let arr1 = [4,6,2,1,7,5];
function findMaxNumber(arr) {
    arr1.sort((a, b) => b - a);
    return arr1[0];
}
console.log(findMaxNumber(arr1));

//Bài 2
function findMinNumber(arr) {
    arr1.sort((a, b) => a - b);
    return arr1[0];
}
console.log(findMinNumber(arr1));

//Bài 3
function pratice(arr) {
    // let newArr;
    // let i = 0;
    arr.forEach((element, index) => {
        arr[index] = parseInt(element) % 2;
    });
    return arr;
}
console.log(pratice([3,4,2,5]));

//Bài 4
function repeatString1(arr) {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
        newArray.push(arr);
    }
    let str = newArray.join('');
    return str;
}
console.log(repeatString1('a'));

//Bài 5
function repeatString2(arr) {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
        newArray.push(arr);
    }
    let str = newArray.join('-');
    return str;
}
console.log(repeatString2('a'));

//Bài 6
function isSymmetricString(str) {
    let arr = str.split('');
    return arr.toString() == arr.reverse().toString();
}
console.log(isSymmetricString('Race car'));

//Bài 7
function sortArray(num) {
    let arr = num.toString().split('');
    arr.sort((a, b) => a - b);
    return parseInt(arr.join(''));
}
console.log(sortArray(3451));