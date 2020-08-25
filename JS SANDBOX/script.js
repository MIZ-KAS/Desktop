/* first lecture
var firstName = "John"
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarrid;
job = 'Teacher';
isMarrid = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarrid);

// variale mutation mean change the value oof a variale

var lastName = prompt('What is his late name?');
var middleName = prompt('enter middle name.');
console.log(firstName + ' ' +  lastName + ' ' +  middleName);

*/

/*
// Basic operators
var year = 2018
var yearJohn = year - 28;
var yearMark = year - 32;
console.log(yearJohn, yearMark);

var now, ageJohn, ageMark;

ageJohn = 28;
ageMark = 32;
now = 2020;

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

*/

/* challenge one

var markMass, johnMass, markHeight, johnHeight;

markMass = 78;
johnMass = 92;

markHeight = 1.69;
johnHeight = 1.95;

johnBmi = johnMass / (johnHeight*johnHeight);
markBmi = markMass / (markHeight*markHeight);
console.log(johnBmi, markBmi);

highBmi = markBmi > johnBmi;
console.log(highBmi);
console.log("Is Mark's BMI higher than John's BMI?", highBmi);

< lessthan 
> greaterthan

*/

var firstName = 'John';
// var status = 'sigle';
//  if (status === 'married') {
//      console.log(firstName + ' is married!')
//  } else {
//      console.log(`${firstName} will married soon`);
//  };

//  var age = 16;

//  if (age < 13) {
//      console.log(`${firstName} is a boy`)
     
//  } else {
//     console.log(`${firstName} is a Man`)
//  }

/*
// Ternary opertor

var firstName = 'john';
age = 28;

age >= 18 ? console.log(firstName + " drink's beer") : console.log(firstName + "drink's juice");


var job = 'code';
switch (job) {
    case 'teacher':
        console.log(firstName, 'teacher');
        break;
    case 'designer':
        console.log(firstName, 'design')
        break;
    case 'code':
        console.log(firstName, 'codes')
        break;

    default:
        console.log(firstName, 'nothing')
        break;
}

// challenge two
var johnOne, johnTwo, johnThree, mikeOne, mikeTwo, mikeThree;
johnOne = 189;
johnTwo = 120; //120
johnThree = 103; //103

mikeOne = 129; 
mikeTwo = 94; //94
mikeThree = 123; //123

maryOne = 97;
maryTwo = 134;
maryThree = 105;

johnAve = (johnOne+johnTwo+johnThree)/3;
mikeAve = (mikeOne+mikeTwo+mikeThree)/3;
maryAve = (maryOne+maryTwo+maryThree)/3;
console.log( 'John Average Score', johnAve);
console.log( 'Mike Average Score', mikeAve);
console.log( 'Mary Average Score', maryAve);


if (johnAve > mikeAve && johnAve > maryAve ) {
    console.log("The winner is John's Team with an Average Score of", johnAve);
} else if(mikeAve > johnAve && mikeAve > maryAve) {
    console.log("The winner is Mike's Team with an Average Score of", mikeAve);
} else if (maryAve > johnAve && maryAve > mikeAve) {
    console.log("The winner is Mary's Team with an Average Score of", maryAve);
} else {
    console.log('There is a draw');
};

*/
// function are containers that house a code and pass argument and return result

/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1991);
var ageMike = calculateAge(1992);
var ageMary = calculateAge(1994);
console.log(ageJohn, ageMary, ageMike);

// function Expression
var whatDoYouDO = function(job, firstName){}

//function declaration
function whatDoYouDO(job, firstName){}

var whatDoYouDO = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches';
        case 'driver':
            return firstName + ' drives';
        case 'designer' :
            return firstName + ' designes';
        default:
            return firstName + ' does something else';
        
    }
}

console.log(whatDoYouDO('designer', 'John'));

// Array

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1991);
var ageMike = calculateAge(1992);
var ageMary = calculateAge(1994);
console.log(ageJohn, ageMary, ageMike);

function yearsUnitRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired ');
    }

}

yearsUnitRetirement(1990, 'John');
yearsUnitRetirement(1948, 'Mike');
yearsUnitRetirement(1960, 'Mary');

*/
function calculateTip(bills) {
    var percetage;

    if (bills < 50) {
        percetage = 0.2;    
    } else if (bills >= 50 && bills < 200) {
        percetage = 0.15;     
    } else if (bills > 200) {
       percetage = 0.10;
    };
    return percetage* bills;

}

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var total =  [tips[0]+bills[0], tips[1]+bills[1] , tips[2]+bills[2]];
console.log(tips);
console.log(total);



