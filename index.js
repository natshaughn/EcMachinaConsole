const prompt = require('prompt-sync')();

// const name = prompt('What is your name: ');

/*
let response = '';

while(response != "QUIT") {
    let input = prompt('What is your command: ');
    response = input.toUpperCase();
    if (response == "ADD") {
        prompt('Who are you? ');
    }
}
*/

/*
const guessNumber = Math.floor(Math.random() * 10) + 1;
let guessRight = false;
while (!guessRight) {
    let guess = prompt('Guess a number from 1 - 10: ');
    guess = Number(guess);

    if (guess === guessNumber) {
        console.log('Winner');
        guessRight = true;
    } else {
        console.log('Loser try again')
    }
}
*/

/*
let response = '';
let names = [];

while(response != 'QUIT') {
    let input = prompt('Howdy do, how are you: ');
    response = input.toUpperCase();
    if(response == 'ADD') {
        let name = prompt('Add a name to the list: ');
        names.push(name);
        console.log('the names are: ' + names);
    }
}
*/

let response = '';

while(response != 'QUIT') {
    let input = prompt('Hello')
    response = input.toUpperCase();
    if(response == 'HELLO' || 'HI' || 'HOWDY') {
        prompt('How are you today?');
    } 
}