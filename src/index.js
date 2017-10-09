const readlineSync = require('readline-sync');

export const greetigs = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};
