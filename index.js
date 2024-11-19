


function writeCards(names, event){

    let cards = []
    for (let i = 0; i < names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    cards.push(message)
    }
    return cards
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(){
let currentNumber = 10
while (currentNumber > -1)
{
    console.log(currentNumber)
    currentNumber--
}
}

