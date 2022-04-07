 
//  const funcs = require("./funcs")
 
// sounds

let navOne = new Audio("sounds/nav1.mp3")
let drink = new Audio("sounds/drink.wav")
let feed = new Audio("sounds/feed.wav")
let play = new Audio("sounds/play.wav")
let intro = new Audio("sounds/intro.wav")

//music

// let bgmOne = new Audio("sounds/bgm1.mp3")
// let bgmTwo = new Audio("sounds/bgm2.mp3")
// let bgmThree = new Audio("sounds/bgm3.mp3")
// let bgmFour = new Audio("sounds/bgm4.mp3")

const audio = document.getElementById("audio");

document.addEventListener("keydown", (event) =>{

    let keyDown = event.key;
    console.log("pressing key")
    console.log(keyDown);
    if (keyDown == "e"){
        // navOne.play();
    //     navOne.currentTime = 0;
        
    }
})

//     navOne.play();

	
//     })







//==================================================================
let min = 2
let max = 10

let createMin = 80
let createMax = 90


function randNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}







const cat = new funcs.Cyberpet("KiKi", "Cat");

console.log(cat.name);
console.log(cat.type);
console.log(`starting hunger is ${cat.hunger}`);
console.log(`starting thirst is ${cat.thirst}`);
console.log(`starting happiness is ${cat.happy}`);

cat.eat()
console.log(`\n line 88 eat`)
console.log(`hunger is ${cat.hunger}`);
console.log(`thirst is ${cat.thirst}`);
console.log(`happiness is ${cat.happy}`);

cat.eat()
console.log(`\n line 94 eat`)
console.log(`hunger is ${cat.hunger}`);
console.log(`thirst is ${cat.thirst}`);
console.log(`happiness is ${cat.happy}`);

cat.play()
console.log(`\n line 82 play`)
console.log(`hunger is ${cat.hunger}`)
console.log(`thirst is ${cat.thirst}`)
console.log(`happiness is ${cat.happy}`)
cat.drink()
console.log(`\n line 87 drink`)
console.log(`hunger is ${cat.hunger}`)
console.log(`thirst is ${cat.thirst}`)
console.log(`happiness is ${cat.happy}`)
cat.drink()
console.log(`\n line 97 drink`)
console.log(`hunger is ${cat.hunger}`)
console.log(`thirst is ${cat.thirst}`)
console.log(`happiness is ${cat.happy}`)


// console.log(`${cat.name} has gained ${cat.hunger} pounds`)

// let randMath = (randNum) => {
//     return Math.ceil(Math.random() * randNum)
// }

// console.log(randMath(15))


// console.log("create your Cyber pet")
