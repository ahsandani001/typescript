let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothing: null = null;
let undefinedVar: undefined = undefined;

// built in objects
const now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [12, 45, 65]
let truths: boolean[] = [true, false];

class Car {

}

// let car: Car = new Car();

// Object literal
let point: {x: number, y: number} = {x: 10, y: 20}

// Function
const logNumbers: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use Annotations
// 1) Function that returns "any" type
const json = '{"x": 10, "y": 20}';
const cordinates: { x: number, y: number } = JSON.parse(json);
console.log(cordinates);

// 2) When we declare variable in one line 
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    if(words.includes(words[i])){
        foundWord = true;
    }
}

// 3) Variables whose type cannot be inferred correctly
let numbersArr = [-10, -1, -12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbersArr.length; i++){
    if(numbersArr[i] > 0){
        numberAboveZero = numbersArr[i];
    }
}