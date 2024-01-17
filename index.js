//Chanllenge one

let message = "There is no war in Ba Sing Se"

let tab = message.split(' ')

//let nbr = 1

//for (const index in message) {
 //   if(message[index] == ' ') {
   //     nbr++
    //}
//}

console.log(tab.length)


//Challenge two

let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']

for(const key in countries) {
    console.log('************************')

    for(let i = 0; i < countries.length; i++) {
        console.log("your country : " + countries[i] + " has the capital named : " + capital[i])
    }
}


//Challenge three

let randomizer = Math.floor(Math.random() * 4)

console.log(randomizer)

if(randomizer == 0) {
    console.log('A certain victory')
}else if (randomizer == 1){
    console.log('not so certain victory')
}else if (randomizer == 2){
    console.log('an uneasy victory')
}else {
    console.log("Your fate is unclear, oh chosen undead")
}