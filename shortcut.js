
// truthy: 'name',5,true.{},[]

//falsy: 0,'',false,null,undefined

let myVar = 50

if (myVar) {
    
    console.log('true');
}
else {
    
    console.log('false');
}

//make true value false and make false value true with !myVar


if (!myVar) {
    
    console.log('true');
}
else {
    
    console.log('false');
}


//ternary..................................

const money = 80;
let food;

if (money > 100) {
    
    food = 'briyani';

}
else {
    
    food = 'cha-biscut';
}


console.log(food);

// write in a ternary way

let food1 = money < 80 ? 'cha-biscuit' : 'grill'

console.log(food1);

let drink = (money > 80 && myVar < 50) ? 'coke' : 'water'

console.log(drink);

//make a number string........................

const number1 = 40;

const number1Str = number1+'';

console.log(number1Str);

//string to number conversion............................

const number2='560'
const stringToNumberConversion = +number2;

console.log(stringToNumberConversion);


//call a function with ternary...........................

const isActive = true;

const showUser = () => console.log('display user');

const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();

//use && if the left side is true then the right side will be executed
isActive && hideUser();


isActive = !isActive;
