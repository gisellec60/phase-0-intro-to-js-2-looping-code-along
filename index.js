/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age}) years old. Happy Birthday to me!`);
}
*/

/*const gifts = ["teddy bear", "drone","doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrap ${gifts[i]} and added a bowl!`)
    }
    return gifts;
}
wrapGifts(gifts); */

const nameArray = ["Giselle", "Angela", "Chanee", "Melissa"];

function writeCards(names, event) {
    const message = [];
    for (let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return message;
    debugger;
}

const message = writeCards(nameArray, "Anniversay");
console.log(message)

function countDown(num) {
    while (num >= 0) { 
        console.log(num);
        num--;
    }
}
countDown(10);