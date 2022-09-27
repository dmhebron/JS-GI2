// Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

function BMI(height, mass){
    return mass / (height * height);
}

let tomBMI = {height: 9, mass: 8};
let jerryBMI = {height: 10, mass: 45};

if (tomBMI < jerryBMI) {
    console.log ("True");
} else {
    console.log ("False");
}
Boolean(BMI(tomBMI.height, tomBMI.mass) < BMI(jerryBMI.height, jerryBMI.mass) );


console.log (`Is Tom's BMI higher than Jerry's? ${Boolean}`);