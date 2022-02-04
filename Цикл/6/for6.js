let m = +(prompt("введите число"));
let n = +(prompt("введите число"));

for (let i = m; i <= n; i++) {
    if (i % 17 === 0 || i ** 3 % 10 === 9 || i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

//done