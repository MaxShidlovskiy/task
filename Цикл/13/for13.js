let n = +(prompt("Введите количество чисел"));
let arr = [];
let sum = 0;
for (let i = 1; i <= n; i++) {
    arr.push(i);
}console.log(arr);
for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
}
console.log(sum);