// JS Basics Bootcamp
// Övningar

// 4 & 5
// let myNum = 50;
// let myString = 'Adam';
// let myBool = false;
// console.log(typeof myNum, typeof myString, typeof myBool);

// 6
// let firstNum = prompt('Enter a number:');
// let secondNum = prompt('Enter a second number:');

// // Dessa två varianter finns för att omvandla strängar till nummer
// console.log(Number(firstNum) + parseInt(secondNum));
// console.log(Number(firstNum) - parseInt(secondNum));
// console.log(Number(firstNum) * parseInt(secondNum));

// 9
// var greeting = 'Good bye world!';
// {
//     let greeting = 'Hello World';
// }
// console.log(greeting);

// 11
// let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
// console.log(sentence.length);

// 14
// let myName = prompt('Vad fan heter du?');
// console.log(`Hej ${myName} din gamle knasboll!`);

// 15
// let sentence = "They see me coding, debugging"; 
// console.log(sentence.toUpperCase());

// 16
// let date = "20250106"; 
// let sentence = "ska jag lära mig att koda!";

// date = date.substring(0, 4);
// console.log(date.concat(sentence));

// 17
// let sentence = "You only get one loop, don't miss your chance to debug, 'cause an infinite loop can break your runtime.";

// if(sentence.includes('debug')) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// 18
// let sentence = "I said a git push, the puller, the puller to the git git push, and the commit.";
// console.log(sentence.replaceAll(',', ''));
// let sentence = "I said a git push, the puller, the puller to the git git push, and the commit.";

// let result = sentence.replace(/,/g, '');
// console.log(result);

// 19 - 22
// let one = 19.48;
// let two = 19.51;
// let three = 19.61;

// console.log(Math.ceil(one));
// console.log(Math.floor(two));
// console.log(Math.round(three));

// let random = Math.floor(Math.random() * 100 + 1);
// console.log(random);

// 23
// let secretPassword = 'Jeppan6y';
// let userPassword = prompt('Ange ditt lösenord:');

// if(userPassword === secretPassword) {
//     alert('Välkommen!');hundvalp
// } else {
//     alert('Fel lösen!');
// }

// 24 
// let number = parseInt(prompt('Ange ett tal'));

// if(number < 100) {
//     console.log('Number is less than 100');
// } else if(number > 100) {
//     console.log('Number is larger than 100');
// } else {
//     console.log('Number is 100');
// }

// 25
// let age = parseInt(prompt('Ange ålder'));
// let height = parseInt(prompt('Ange längd i cm'));

// if(age >= 10 && height >= 135) {
//     console.log('Kul!');
// } else {
//     console.log('Han får tyvärr inte åka!');
// }

// if(age >= 10 && height >= 135) {
//     console.log('Kul!');
// } else { 
//     if(age < 10 && height < 135) {
//         console.log('Han är både för ung och för kort!');
//     } else if(age < 10) {
//         console.log('Han är för ung!');
//     } else {
//         console.log('Han är för kort!');
//     }
// }

// if(age >= 10 && height >= 135) {
//     console.log('Kul!');
// } else if(age < 10 && height < 135) {
//     console.log('Han är både för ung och för kort!');
// } else if(age < 10) {
//     console.log('Han är för ung!');
// } else {
//     console.log('Han är för kort!');
// }

// 28
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     let random = Math.floor(Math.random() * 100 + 1);
//      // Dessa två gör exakt samma sak!
//     sum = sum + random;
//     sum += random;
// }
// console.log(sum);
// console.log('Summan blir:', sum / 100);

// 29
// let number = parseInt(prompt('Ange ett tal mellan 1 - 100'));
// let isGameOver = false;
// let index = 0;

// while(!isGameOver) {
//     let random = Math.floor(Math.random() * 100 + 1);
//     console.log('Du slumpade:', random);
    
//     if(random === number) {
//         isGameOver = true;
//     }
//     // index = index + 1;
//     // Index ökas med 1, såhär gör vi programmerare
//     index++;
// }

// console.log(`Snyggt! Du fick rätt tal efter ${index} slumpningar!`);

// Functions Bootcamp
// Övningar

// 2
// let count = 5;
// // Båda funkar, men andra är snyggare!
// // count = increase(count);
// console.log(increase(count));

// function increase(c) {
//     c++;
//     return c;
// }

// 3
// function generateRandom(min, max) {
//     // let random = Math.floor(Math.random() * max + min);
//     // return random;
//     return Math.floor(Math.random() * max + min);
// }

// console.log(generateRandom(1, 6));


// 5
// let birthDate = getUserInput();
// console.log(getBirthYear(birthDate));

// function getUserInput() {
//     let userInput = prompt('Ange ditt födelsedatum i formatet YYYY-MM-DD');
//     return userInput;
// }

// function getBirthYear(date) {
//     return date.substring(0, 4);
// }

// 6
// calculate(5, 10, '+');
// calculate(5, 10, '-');
// calculate(5, 10, '/');
// calculate(5, 10, '*');
// calculate('hej', 10);
// calculate(10, 'Hej');

// function calculate(firstNumber, secondNumber, operation) {
//     let result = 0;

//     if(typeof firstNumber ==='number' && typeof secondNumber === 'number' && operation !== undefined) {
//         switch(operation) {
//             case '+':
//                 result = add(firstNumber, secondNumber);
//                 break;
//             case '-':
//                 result = subtract(firstNumber, secondNumber);
//                 break;
//             case '/':
//                 result = divide(firstNumber, secondNumber);
//                 break;
//             case '*':
//                 result = multiply(firstNumber, secondNumber);
//                 break;
//             default:
//                 console.log('Error');
//         }
//         console.log(result);
//     } else {
//         console.log('Du skickade in felaktig data!');
        
//     }
// }

// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function divide(x, y) {
//     return x / y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// 7
play();

function play() {
    let playerScore = 0;
    let computerScore = 0;
    let winningScore = 3;

    while(playerScore < winningScore && computerScore < winningScore) {
        let hand = getUserHand();
        let compHand = generateRandom(1, 3);
        if(hand.toUpperCase() === 'STEN') {
            if(compHand === 1) {
                alert(`Ni båda angav ${hand}. Ställningen är ${playerScore} - ${computerScore}`);
            } else if(compHand === 2) {
                playerScore++;
                alert(`Snyggt! Din ${hand} slog datorns sax! Ställningen är ${playerScore} - ${computerScore}`);
            } else if(compHand === 3) {
                computerScore++;
                alert(`Fuck! Datorns påse spöade din ${hand}! Ställningen är ${playerScore} - ${computerScore}`);
            }
        } else if(hand.toUpperCase() === 'SAX') {
            if(compHand === 1) {
                computerScore++;
                alert(`Fuck! Datorns sten spöade din ${hand}! Ställningen är ${playerScore} - ${computerScore}`);
            } else if(compHand === 2) {
                alert(`Ni båda angav ${hand}. Ställningen är ${playerScore} - ${computerScore}`);
                
            } else if(compHand === 3) {
                playerScore++;
                alert(`Snyggt! Din ${hand} slog datorns påse! Ställningen är ${playerScore} - ${computerScore}`);
            }
        } else if(hand.toUpperCase() === 'PÅSE') {
            if(compHand === 1) {
                playerScore++;
                alert(`Snyggt! Din ${hand} slog datorns sten! Ställningen är ${playerScore} - ${computerScore}`);
            } else if(compHand === 2) {
                computerScore++;
                alert(`Fuck! Datorns sax spöade din ${hand}! Ställningen är ${playerScore} - ${computerScore}`);
                
            } else if(compHand === 3) {
                alert(`Ni båda angav ${hand}. Ställningen är ${playerScore} - ${computerScore}`);
            }
        } else {
            alert('Du får endast ange sten, sax eller påse');  
        }
    }

    handleGameOver(playerScore, computerScore);
}

function getUserHand() {
    let hand = prompt('Ange sten, sax eller påse!');
    return hand;
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

function handleGameOver(pScore, cScore) {
    if(pScore > cScore) {
        alert(`Grattis! Ställningen blev ${pScore} - ${cScore}`);
    } else {
        alert(`Skit! Ställningen blev ${pScore} - ${cScore}`)
    }
}