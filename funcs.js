

class Cyberpet{


    constructor(name, type){
        this._name = name;
        this._type = type; // cat, dog, lizard, penguin, gremlin
        this._hunger = randNumber(createMin, createMax); //
        this._thirst = randNumber(createMin, createMax); //
        this._happy = randNumber(createMin, createMax); //
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

get happy(){
    return this._happy;// spelling
}
eat(){
    // what do we want eat to do
    this._hunger += randNumber(min, max);

    
}
drink(){
    this._thirst += randNumber(min, max);
}
play(){
    this._happy += randNumber(min, max);
    this._hunger -= randNumber(min, max);
}
}

module.exports = {
    Cyberpet,
}