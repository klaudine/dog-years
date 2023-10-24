// My actual age
var myAge = 33;

// First two years of a dog's life
var earlyYears = 2;

earlyYears *= 10.5;

// Dog years after the first two years
var laterYears = myAge - 2;

// Each dog year accounted for by my later years
laterYears *= 4;

// console.log(laterYears);

// My age in dog years is the sum of earlyYears and laterYears
var myAgeInDogYears = earlyYears + laterYears;

// console.log(myAgeInDogYears);

// Returns a string of all lowercase letters
var myName = ('Klaudine'.toLowerCase());

// This string introduces myself and calculates my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
