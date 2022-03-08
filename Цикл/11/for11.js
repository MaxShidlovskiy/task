let n = +prompt("Введите количество чисел");
let arr1 = [];
let arr2 = [];
if (!(n < 2 || isNaN(n))) {
    let max = +prompt("Введите следующее число");
    arr1.push(max);
    for (let i = 1; i < n; i++) {
        let num = +prompt("Введите целое число");
        arr1.push(num);
        if (num > max) {
            max = num;
        } else continue
    }
    console.log(max);
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] != max) {
            arr2.push(arr1[j]);
        }
    }
    let max2 = arr2[0];
    for (let m = 0; m < arr2.length; m++) {
        if (arr2[m] > max2) {
            max2 = arr2[m];
        } else continue;
    }
    console.log(max2);
}