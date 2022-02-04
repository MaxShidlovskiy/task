let arr = [];
let num = [];
let sum = 1;
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("Введите целое число", +i);
}
for (let j = 0; j < arr.length; j++) {

    if (arr[j] % 2 === 0) {
        console.log('YES');
    }else console.log('NO');
} 
    



