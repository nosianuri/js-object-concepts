const student = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
    major: 'Mathematics',
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    isRich: false,
    bestFriend: {
        name: 'Kundu',
        major: 'mathematics'
    },
    takeExam: function(){
        console.log(this.name, 'taking exam');
    },
    treatDey: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);