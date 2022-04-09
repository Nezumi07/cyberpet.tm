

let min = 5;
let mid = 12;
let max = 25;

// // different number range for creating cyberpet
let createMin = 30;
let createMax = 70;

function randNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
        return this._boredom;
    }
    eat(){
        // what do we want eat to do
        this._hunger += randNumber(min, max);
        this._thirst -= (min);
        this._boredom -= randNumber(min, max);
        logOutput();
    }
    drink(){
        this._hunger -= (min);
        this._thirst += randNumber(min, max);
        this._boredom -= randNumber(min, max);
        logOutput();
    }
    fun(){
        this._hunger -= randNumber(min, max);
        this._thirst -= (min);
        this._boredom += randNumber(min, max);
        logOutput();
    }
}
class Cat extends Cyberpet {
    constructor(name, meow){
        super(name);
        this._meow = meow;
    }
    get meow(){
        return this._meow;
    }
    speak(){
        petMeow.play();
        petMeow.currentTime = 0;
        console.log("cat says meow");
        // textContent = "MEOWWWW!"
    }
}
class Dog extends Cyberpet{
    constructor (name,woof){
        super(name);
        this._woof = woof;
    }
    get woof(){
        return this._woof;
    }
    speak(){
        petWoof.play();
        petWoof.currentTime = 0;
        console.log("dog is barking mad")
    }
}

class Rabbit extends Cyberpet{
    constructor (name,woof){ // change woof
        super(name);
        this._woof = woof;
    }
    get woof(){
        return this._woof;
    }
    speak(){
        petWoof.play();
        petWoof.currentTime = 0;
        comsole.log("dog is barking mad")
    }
}






module.exports = {
    Cyberpet,
    Cat,
    Dog,
    Rabbit,
}