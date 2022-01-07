const a = +(prompt("введите длину стороны А"));
const b = +(prompt("введите длину стороны B"));
const c = +(prompt("введите длину стороны C"));
if (a ===  b && b === c) {
    console.log("Равносторонний");
} else if (a === b || b === c || b === c) {
    console.log("Равнобедренный");
} else {
        console.log("разносторонний");
    }