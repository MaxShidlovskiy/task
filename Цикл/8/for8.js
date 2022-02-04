let n = +(prompt("Введите количество чисел"));
let arr =[];
for (let i = 0; i < n; i++) {
    if (i !== n) {
        arr[i] = prompt("Введите целое число"+i);

    } 
    
}


console.log([arr]);
//done