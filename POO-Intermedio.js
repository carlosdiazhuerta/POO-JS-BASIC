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

console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan))