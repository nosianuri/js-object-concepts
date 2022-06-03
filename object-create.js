// 1. using object literal
const student = { name: 'Sakib AL Hasan', job: 'cricketer' };
// 2. constructor
const person = new Object();
// 3. 
// const human = object.create(null);
const human = object.create(student);
// console.log(human.job);

class people {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new people('Manus', 12);
console.log(peop);

// function
function Manus(name){
    this.name = name;
}
const man = new Manus('Kader');
console.log(man);