// const pet = require("./funcs")




 
// sounds
let min = 15
let max = 30

// // different number range for creating cyberpet
let createMin = 2
let createMax = 60

function randNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Cyberpet{
    constructor(name, type){
        this._name = name;
        this._type = type; 
        this._hunger = randNumber(createMin, createMax); //
        this._thirst = randNumber(createMin, createMax); //
        this._boredom = randNumber(createMin, createMax); //
    }
    get name(){
    return this._name;
    }    
    get type(){
        return this._type;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    get boredom(){
        return this._boredom;// spelling
    }
    eat(){
        // what do we want eat to do
        this._hunger += randNumber(min, max);
    }
    drink(){
        this._thirst += randNumber(min, max);
    }
    play(){
        this._boredom += randNumber(min, max);
        this._hunger -= randNumber(min, max);
    }
}


let navOne = new Audio("sounds/nav1.wav")
let drink = new Audio("sounds/drink.wav")
let feed = new Audio("sounds/feed.wav")
let play = new Audio("sounds/play.wav")
let sleep = new Audio("sounds/sleep.wav")
let intro = new Audio("sounds/intro.wav")

// music

let bgmOne = new Audio("sounds/bgm1.mp3")
let bgmTwo = new Audio("sounds/bgm2.mp3")
let bgmThree = new Audio("sounds/bgm3.mp3")
let bgmFour = new Audio("sounds/bgm4.mp3")

const audio = document.getElementById("audio");

document.addEventListener("keydown", (event) => {

    let keyDown = event.key;
    console.log("pressing key")
    console.log(keyDown);
    if (keyDown == "e"){

        feed.play();

        feed.currentTime = 0;

}
    else if (keyDown == "r"){
        drink.play();
        drink.currentTime = 0;
    }

    else if (keyDown == "d"){
        play.play();
        play.currentTime = 0;
    }

    else if (keyDown == "f"){
        sleep.play();
        sleep.currentTime = 0;
    }

})



//     })





// // =============================//
// // set values for Math.random - for deduction / increase


// // creat a variable and assign the randNumber function 
// // with a min and max value
// let randInt = randNumber(min,max) // don't need this??

// // when the function is called with a min and max value
// // a random number is generated from (inluding) min to (including) max


// // console log the variable with the value or use the variable as a value in another function
// console.log(randInt)

// // =============================//
// // 



// console.log(pet.Cyberpet)

const cat = new pet.Cyberpet("KiKi", "Cat");

console.log(cat.name);
console.log(cat.type);
console.log(`starting hunger is ${cat.hunger}HP`);
console.log(`starting thirst is ${cat.thirst}HP`);
console.log(`starting boredom is ${cat.boredom}HP`);

// // // test actions change values
// // // console testing================================

cat.eat();
console.log(`\n line 73 eat`);
console.log(`hunger is ${cat.hunger}`);
console.log(`thirst is ${cat.thirst}`);
console.log(`bordom is ${cat.boredom}`);
// cat.eat();
// console.log(`\n line 77 eat`);
// console.log(`hunger is ${cat.hunger}`);
// console.log(`thirst is ${cat.thirst}`);
// console.log(`bordom is ${cat.boredom}`);
// cat.play();
// console.log(`\n line 82 play`);
// console.log(`hunger is ${cat.hunger}`);
// console.log(`thirst is ${cat.thirst}`);
// console.log(`bordom is ${cat.boredom}`);
// cat.drink();
// console.log(`\n line 87 drink`);
// console.log(`hunger is ${cat.hunger}`);
// console.log(`thirst is ${cat.thirst}`);
// console.log(`bordom is ${cat.boredom}`);
// cat.drink();
// console.log(`\n line 97 drink`);
// console.log(`hunger is ${cat.hunger}`);
// console.log(`thirst is ${cat.thirst}`);
// console.log(`bordom is ${cat.boredom}`);

// console.log(`${cat.name} has gained ${cat.hunger} pounds`);

