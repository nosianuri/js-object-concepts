const Kibria = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
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
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam'
}
// call
// Kibria.treatDey.call(heroBalam, 500, 100, 50);
// Kibria.treatDey.call(heroBalam, 300, 50, 30);

Kibria.treatDey.apply(heroBalam, [500, 100, 50]);
Kibria.treatDey.apply(heroBalam, [1000, 200, 100]);
Kibria.treatDey.apply(normalGolam, [700, 100, 70]);

const obj = {a:1, b:7, c: 3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFrind= (name = "chokina")=>"name"; console.log(getGirlFrind());