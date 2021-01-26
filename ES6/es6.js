//ES6 -> ESNext, ES2015

/* let */
for(let i=0; i<10; i++){
}

console.log(i)

/* const */
const pi = 3.14

pi = 2
//Uncaught TypeError: Assignment to constant variable.
//    at <anonymous>:1:4

/* Array destructuring */
var nos = [3,1,4,2,5]

var [x, y] = nos

/* Rest Operator (Array) */
var nos = [3,1,4,2,5]

var [x, y, ...z] = nos

/* Spread Operator (Array) */
var nos = [3,1,4,2,5]

var newNos = [ ...nos, 10, 20, 30]

function add(...args){
    let result = 0;
    for(let index = 0, count = args.length; index < count; index++)
        result += args[index];
    return result;
}

add(...nos) //=> 15

/* Object destructuring */

var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bengaluru'
}

var { id, city } = emp
var { id : x, city : y } = emp

/* Rest Operator (Object) */
var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bengaluru'
}

var { id : x, ...z } = emp

/* Spread Operator (Object) */
var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bengaluru'
}

var newEmp = { ...emp, salary : 10000 }

/* Default Arguments */
function add(x = 10,y = 20){
    return x + y;
}

add()
//30
add(100)
//120
add(undefined, 200)
//210
add(100,200)
//300

/* Arrow functions */

//function statement
function add(x,y){
    return x + y;
}

//function expression
var add = function(x,y){
    return x + y;
}

var add = (x,y) => {
    return x + y;
}

var add = (x,y) => x + y;

/* Template strings */

var x = 10, y = 20
//Sum of 10 and 20 is 30

var s1 = 'Sum of ' + x + ' and ' + y + ' is ' + (x + y)

var s2 = `Sum of ${x} and ${y} is ${x + y}`

var s3 = `Sum of
${x} and ${y}
is ${x+y}`

/* Object construction  */
var id = 100, name = 'John', org = 'Starbucks'

var obj = {
    id : id,
    name : name,
    org : org
}

var obj2 = { id, name, org }

/* Classes */

class Employee{
    id = 0;
    name = '';
    salary = 0;

    static printType(){
        console.log('Employee');
    }

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display(){
        console.log(`id=${this.id}, name=${this.name}, salary=${this.salary}`);
    }
}

/* Class Inheritance */
class FullTimeEmployee extends Employee{
    benefits = '';
    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }
}

/* 'for of' construct */
var nos = [3,1,4,2,5]

for(var index = 0, count = nos.length; index < count; index++)
    console.log(nos[index]);


for(let no of nos)
    console.log(no)