const num = [1, 5, 78, 6, 87];

const student = {
    
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
};


const about = `My Name is ${student.name} age of ${student.age} has number ${num[2]} also liked movies ${student.movies[0]}`;

console.log(about);

// arrow function


const getFiftyFive = () => 5;

console.log(getFiftyFive());

const addSixtyFive = (num) => num + 60;

console.log(addSixtyFive(5));

const doMath = (n1, n2) => {
    
    return n1 + n2;

}

console.log(doMath(1,2));


// spread operator

const addNewNumbers = [...num];

num.push(100);
num.push(200);

const currentNumber = [...num, 400];

console.log(num);
console.log(addNewNumbers);

console.log(currentNumber);
// console.log(addNewNumbers);

