let n = +prompt("Введите количество чисел");
let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {

    if ((i ** 2) % 10 === 2 || (i ** 2) % 10 === 5 || (i ** 2) % 10 === 8) {
        arr.push(i);
    }

}

console.log(sum);