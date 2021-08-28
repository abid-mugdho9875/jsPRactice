const numbers = [12, 13, 45, 23];
const squares = numbers.map(y => y + y)
console.log(squares)
//class
students = [{
        studentRoll: 01,
        name: 'abid',
        mark: 10
    },
    {
        studentRoll: 02,
        name: 'hasan',
        mark: 09
    },
    {
        studentRoll: 03,
        name: 'mukdho',
        mark: 08
    }
]
const result = students.map(x => x.name)
console.log(result)
students.forEach(element => {
    console.log(element.studentRoll)

});

const reslt = students.filter(e => e.studentRoll == 01)
console.log(reslt)
const res = students.find(e => e.studentRoll == 01)
console.log(res)