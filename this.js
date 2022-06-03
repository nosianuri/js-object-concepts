// console.log(this);
// const Kibria = {
//     id: 101,
//     name: 'RJ Kibria',
  /*   money: 5000,
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
   treatDey: function(expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add(a, b) {
    console.log(this);
} */

const obj = {a:1, b:7, c: 3, length:2};
console.log(Object.keys(obj).length);