"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let MyWork = [];
for (let i = 1; i < 10; i++) {
    let lesson = {
        name: "lesson" + i,
        status: i % 2 != 0,
    };
    MyWork.push(lesson);
}
console.log(MyWork);
//Question 02
let maxValue = 10;
const randomNumber = (Math.floor(Math.random() * maxValue + 1));
console.log(randomNumber);
let correctGuessNumber = false;
const guessNumber = [10, 20, 40, 50, 60, 70, 80, 90, 100];
let num = 0;
while (!correctGuessNumber && num < guessNumber.length) {
    let num = 0;
    while (!correctGuessNumber && num < guessNumber.length) {
        let currentGuess = guessNumber[num];
        if (currentGuess === randomNumber) {
            console.log(`Congrats! You guessed the correct number ${currentGuess}`);
            correctGuessNumber = true;
        }
        else if (currentGuess > randomNumber) {
            console.log(`Your guess ${currentGuess} is too high.`);
        }
        else if (currentGuess < randomNumber) {
            console.log(`Your guess ${currentGuess} is too low.`);
        }
        num++;
    }
}
console.log(`The random number was ${randomNumber}`);
