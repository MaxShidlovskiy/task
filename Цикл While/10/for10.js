 const num = +prompt("Введите целое число");
 let i = 1;
 let x = 1;
 let y = 1;

 while (num >= 1) {

     if (i ===1 ||5 <= i <= 9) {
         if (i===1 ||i < 5) {
             console.log(i);
         }
         if (x > 9 && x <= 37) {
             if (17 <= x <= 37) {
                 if (x < 17 || x > 37) {
                     console.log(x);
                 }
                 if (y > 37) {
                     if (78 <= y <= 87) {
                         if (y < 78 || y > 87) {
                             console.log(y);
                         }
                     }
                 }
             }
         }
     } else {
         continue;
     }
     if (i === num) {
         break;
     }

     i += 1;
     x += 1;
     y += 1;

 }