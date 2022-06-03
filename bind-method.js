const Kibria = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
   treatDey: function(expense) {
        this.money = this.money - expense;
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

// Kibria.treatDey(100);

const heroTreatDey = Kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
const normalTreatDey = Kibria.treatDey.bind(normalGolam);
normalTreatDey(2000);