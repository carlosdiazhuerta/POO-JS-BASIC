// const juan = {
//     name: "juan",
//     age: 18,
//     approvedCourses: ["curso 1"],
//     addCourse(newCourse){
//         this.approvedCourses.push(newCourse)
//     }
// }

// Object.keys(juan);
// Object.getOwnPropertyNames(juan);
// Object.entries(juan);

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
}

// const stringfiedComplexObj = JSON.stringify(obj1) // este metodo convierte el objeto en un string
// console.log(stringfiedComplexObj)
// const obj2 = JSON.parse(stringfiedComplexObj) // este metodo convierte el string en un objeto
// console.log(obj2)
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
// const arrleglo = ["2", "22", "32", "43", "55", "100", "lala", "510"];
// function recursividad(numArry){
//     if(numArry != 0){
//         const firstNum = numArry[0];
//         console.log(firstNum);
//         numArry.shift();
//         recursividad(numArry);
//     }
// }
function isObject(subject) {
    return typeof subject == "object";
};
function isArray(subject) {
    return Array.isArray(subject);
};

function deepCopt(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    if (subjectIsArray) {
        copySubject = []
    } else if (subjectIsObject) {
        copySubject = {}
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObjec = isObject(subject[key]);
        if (keyIsObjec) {
            copySubject[key] = deepCopt(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

// Este bloque de código define tres funciones y un método:

// La función isObject(subject) comprueba si subject es un objeto. Devuelve true si subject es de tipo object, de lo contrario, devuelve false.

// La función isArray(subject) comprueba si subject es un arreglo. Devuelve true si subject es un arreglo, de lo contrario, devuelve false.

// La función deepCopy(subject) realiza una copia profunda del objeto subject pasado como parámetro. El método utiliza las funciones isObject(subject) y isArray(subject) para determinar si subject es un objeto o un arreglo. En función de eso, crea una nueva instancia de subject para hacer una copia.

// El método hace uso de un bucle for para recorrer todas las propiedades del objeto subject. Si alguna de las propiedades es un objeto o un arreglo, el método deepCopy() se llama recursivamente para crear una copia profunda de ese objeto. De lo contrario, la propiedad se copia directamente en la nueva instancia de subject.

// Finalmente, se devuelve la copia profunda del objeto subject.

// En resumen, este bloque de código crea una función para realizar una copia profunda de un objeto o un arreglo en JavaScript.

// deepfrezzer sirve para bloquer todos los objetos anidados de manera recursiva

// export function deepFreeze(obj) {
//     if( typeof(obj)!=="object") return

//     Object.freeze(obj); 

//     for(let key in obj){
//       deepFreeze(obj[key]) 
//     }

// Este código es una función llamada deepFreeze, que toma un objeto como argumento y congela todo su contenido de manera profunda para que no se pueda modificar en el futuro. La congelación de un objeto significa que no se pueden agregar, eliminar o modificar propiedades en ese objeto.

// Aquí hay una explicación detallada de la función:

// La primera línea verifica si el argumento obj no es un objeto. Si es así, la función termina inmediatamente sin hacer nada más. Esto se hace para evitar que se intenten congelar valores primitivos como números, cadenas, booleanos, null y undefined.
// La segunda línea usa el método Object.freeze() para congelar el objeto que se pasa como argumento. Esto congela solo el objeto principal, pero no congela los objetos anidados que podrían estar dentro del objeto.
// El siguiente paso es un bucle for-in que se utiliza para iterar sobre todas las propiedades del objeto. Para cada propiedad, se llama recursivamente a la función deepFreeze() para congelar cualquier objeto anidado. Esto se hace para asegurarse de que todo el objeto esté completamente congelado y no se pueda modificar en el futuro.
// En resumen, la función deepFreeze() es una función utilitaria que se puede usar para congelar objetos de manera profunda y evitar modificaciones accidentales en el futuro.

// abstracion y encapsulamiento sin prototipos

const student = {
    name:undefined,
    email: undefined,
    age: undefined,
    aprovedCoursed: undefined,
    rutas: undefined,
    socialMedia: {
        instagran: undefined,
        facebook: undefined,
        gmail: undefined,
    }
};

const paco = deepCopt(student);
Object.defineProperty(paco,"name",{
    value: "francisco",
    writable:false,
})

