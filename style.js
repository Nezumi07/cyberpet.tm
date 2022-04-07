 //sounds

let navOne = new Audio("sounds/nav1.wav")
let drink = new Audio("sounds/drink.wav")
let feed = new Audio("sounds/feed.wav")
let play = new Audio("sounds/play.wav")
let intro = new Audio("sounds/intro.wav")

//music

let bgmOne = new Audio("sounds/bgm1.mp3")
let bgmTwo = new Audio("sounds/bgm2.mp3")
let bgmThree = new Audio("sounds/bgm3.mp3")
let bgmFour = new Audio("sounds/bgm4.mp3")

const audio = document.getElementById("audio");

document.addEventListener("click", () =>{

    navOne.play();

	
    })





 class Cyberpet{
    constructor(name, type){
        this._name = name;
        this._type = type; // cat, dog, lizard, penguin, gremlin
        this._hunger = 10; //
        this._thirst = 10; //
        this._boredom = 10; //
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
    return this._fix;
}

get boredom(){
    return this._bordom;
}

eat(){
    this._hunger +=10;
}

drink(){
    this._thirst +=10;

}

play(){
    this._boredom += 10;
    this._hunger -10;
}
}

const cat = new Cyberpet("KiKi", "Cat");
    
// cat.eat()
// cat.eat()

console.log(cat.name)
console.log(cat.type)
console.log(cat.hunger)
console.log(cat.thirst)
console.log(cat.play)






// console.log(`${cat.name} has gained ${cat.hunger} pounds`)

// let randMath = (randNum) => {
//     return Math.ceil(Math.random() * randNum)
// }

// console.log(randMath(15))


console.log("create your Cyber pet")
