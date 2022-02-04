let n = +(prompt("введите число m"));
let m = +(prompt("введите число n"));
let arr1 = [];
let arr2 = [];
let arr3 = [];
if (n < m) {
    for (let i = n; i <= m; i++) {
        arr1.push(i);
    }
    console.log(arr1);
}
if (n > m) {
    for (let j = n; j >= m; j--) {
        arr2.push(j);
    }
    console.log(arr2);
}
if (n = m) {
    for (let x = n; x <= m; x++) {
        arr3.push(x);
    }
    console.log(arr3);
}
//done