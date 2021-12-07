let number1 = "1";
let number2 =  1;

// 1 dấu bằng là phép gán
// let name = "Nam";
// let x = name;

// 2 dấu bằng là phép so sánh giá trị
// console.log(number1 == number2) => true

// 3 dấu bằng là phép so sánh giá trị và kiểu dữ liệu
// console.log(number1 === number2) => false

let arrayDemo = [1, "MindX", [1, 2, 3]];
arrayDemo.unshift(1000);
console.log(arrayDemo);

arrayDemo.shift();
console.log(arrayDemo);

arrayDemo.push(1000);
console.log(arrayDemo);

arrayDemo.pop();
console.log(arrayDemo);


for (let i = 0; i<10; i++) {
    console.log("i="+i)

}

let a = 7.25;
round(a);
console.log(a)