let myArr = [1,2,3,4,5,6]; 
for (let i = 0; i < myArr.length; i++) {            
    console.log(myArr[i]);
    
}
myArr.push('Hello world');  //thêm ptử vào cuối mảng

console.log(myArr);

myArr.splice(3,4,5,6,7,'zxczxc'); //xoá ptử từ index = 3, bộ đếm 4 và thay thế bằng các gtrị sau
console.log(myArr); 

let subArr = myArr.slice(); //clone mảng myArr
console.log(subArr);

subArr = myArr.slice(0,4);  //clone mảng myArr từ index = 0 và bộ đếm 4 ptử
console.log(subArr);

let numbers = [1,3,6,2,3,1,6,11,12];
numbers.sort((a,b) => a - b); //sắp xếp tăng dần
console.log(numbers);

let names = 'Nguyễn, Thành, Nam';
let arrNames = names.split(', ');   //tách chuỗi thành 1 mảng từ ký tự ', '
console.log(arrNames);

let newChars = arrNames.join('___');    //gộp mảng thành 1 chuỗi với ký tự __
console.log(newChars);

let arr1 = [1,2,3];
let arr2 = [1,2,3];
let arr3 = [3,2,1];
let str = "1,2,3";
console.log(arr1 == arr2);  //false - so sánh địa chỉ ô nhớ - THAM CHIẾU (reference)
console.log(arr1 == arr3);  //false - so sánh địa chỉ ô nhớ - THAM CHIẾU (reference)
console.log(arr1 == str);   //true - arr1 được convert sang chuỗi để so sánh => so sánh giá trị
console.log(arr2 === str);  //false - so sánh cả kiểu dữ liệu
console.log(arr1 == arr3.sort());   //false
console.log(arr3 == arr3.sort());   //true - tham chiếu tới thg ban đầu 
console.log(arr1 == arr1.reverse());    //true
console.log(arr2 == arr2.reverse().sort());    //true



