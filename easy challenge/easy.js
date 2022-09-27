// Create an array of students holding their last name, first name, and age with 3 students. 
// To validate, please log a greeting with the first name, last name and age of the 2nd student. 
// The output should look like "Hello, my name is John Doe and I'm 19 years old."
const student = [ 
{lastName:"McDuck", firstName: "Scrooge", age: 50},
{lastName:"Mouse", firstName: "Mickey", age: 40},
{lastName:"Duck", firstName: "Donald", age: 30},
];
console.log(
    `Hello, my name is ${student[1].firstName} ${student[1].lastName} and I'm ${student[1].age} years old`

)