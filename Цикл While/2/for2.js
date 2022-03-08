let num;
let sum = 0;
while (num != "стоп" && num != "хватит" && num != "достаточно") {
  num = prompt("Напиши слово");
  if (num != "стоп" && num != "хватит" && num != "достаточно") {
    sum +=1;
  }
}
console.log(sum);
