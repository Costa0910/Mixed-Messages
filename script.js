function randomNumber(numb){
    return Math.floor(Math.random() * numb)
};

// Messages 
const messages ={
    first: ['Don´t be sad because of peaple - they will all die.',
            'The only source of knowledge is experience. -- Albert Einstein',
            'Pleasure in the jop puts perfection in the work.'],
    second: ['Moon', 'Jupiter', 'Mars'],
    third: ['Musician', 'Best', 'Developer']
};

for(message in messages){
    let num = (randomNumber(messages[message].length))
    //let messagesNum = (randomNumber(messages[message].length))
    let number = (messages[message][num])
    

    if(message === 'first') {
        console.log(`Quote of the day - ${number}`)
    } else if (message === 'second') {
        console.log( `Could you live in/on/in the - ${number}`)
    } else if (message === 'third') {
        console.log(`You were born to be the - ${number}`)
    }
}