let num = prompt('Введите число');
let min = Math.min(...num.split(''));
let max = Math.max(...num.split(''));
 
console.log("Максимальная цифра равна", max);
console.log("Минимальная цифра равна", min);