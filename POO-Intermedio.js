const juan = {
    name: "juan",
    age: 18,
    approvedCourses: ["curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

Object.keys(juan);
Object.getOwnPropertyNames(juan);
Object.entries(juan);

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
}

const stringfiedComplexObj = JSON.stringify(obj1) // este metodo convierte el objeto en un string
console.log(stringfiedComplexObj)
const obj2 = JSON.parse(stringfiedComplexObj) // este metodo convierte el string en un objeto
console.log(obj2)
// esta es una forma de copiar objetos en JS, se evita que se haga una copia de la referencia en memoria
// se realiza una copia en la memoria Heap
// tanto parse como stringfied no saben trabajar con metodos dentro de objetos

// recursividad

// function recursividad(numero){
//     console.log(numero)
//     if(numero<5){
//         return recursividad(numero + 1);
//     } else {
//         return 5;
//     }
// };
const arrleglo = ["2", "22", "32", "43", "55", "100", "lala", "510"];
function recursividad(numArry){
    if(numArry != 0){
        const firstNum = numArry[0];
        console.log(firstNum);
        numArry.shift();
        recursividad(numArry);
    }
}