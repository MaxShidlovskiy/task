const S = +(prompt("Растояние между бабульками"));
const V1 = +(prompt("Бабулька номер 1"));
const V2 = +(prompt("Бабулька номер 2"));

const T = S / (V1+V2).toFixed(1);

console.log (T);
