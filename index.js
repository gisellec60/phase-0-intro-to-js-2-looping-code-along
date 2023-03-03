// Code your solutions in this file
const newArray= [];
function writeCards(name,event) { 
    for (let i = 0; i < name.length; i ++ ) { 
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        debugger
    }
        return newArray
}   
function countDown(num) {
    while (num !== 0) {
        console.log(num--)
    }
    console.log(num)
}          
