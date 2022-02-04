let arr = []; //то что ввёл
let num = []; // отсеял нули
let sum = 1;
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("Введите целое число", +i);
}
for (let j = 0; j < arr.length; j++) {

    if (arr[j] != 0) {
        num.push(arr[j]);
    }
}
for (let k = 0; k < num.length; k++) {
    sum =sum* num[k];

}

console.log(arr);
console.log(num);
console.log(sum);