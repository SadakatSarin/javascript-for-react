// Imagine we want extract data from an array. Previously, how would this be done?


let introduction = ["Hello", "I" , "am", "Sarah",45];
// let greeting = introduction[0];
// let name = introduction[3];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

//but it is very time consuming


//Basic Array Destructuring..........................................
// let [greeting, pronoun] = introduction;

// console.log(greeting, pronoun);



//Skipping Items in an Array.....................................

// let [greeting,,, name] = introduction;

// console.log(greeting ,name);

//Assigning the rest of an array........................................


// let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

// // console.log(greeting);//"Hello"
// console.log(intro);//["I", "am", "Sarah"]


// Destructuring Assignment with Functions........................

// function getArray() {
//     return ["Hello", "I" , "am", "Sarah"];
// } 
// let [greeting,pronoun] = getArray();

// console.log(greeting);//"Hello"
// console.log(pronoun);//"I"



// Basic Object Destructuring.................................................

    
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name, country, job} = person;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"