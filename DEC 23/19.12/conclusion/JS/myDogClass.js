//Regular class
class Dog{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(`${this.name} make sound`)
    }

    walk(){
        console.log(`${this.name} going to walk`)
    }
}

//Extends class
class GurdianDog extends Dog{
    bark(){
        console.log("HAOUO HAOUOO WOOF WOOF");
    }
}

var jasper = new Dog("Jasper");
jasper.speak(); 
var nippo = new Dog("Nippo");
nippo.speak();
nippo.walk();
var shoko = new GurdianDog("Shoko");
shoko.speak();
shoko.bark();

//
class MathUtils{
    static calculateVat(price){
        return price*1.17;
    }
}

//price 250
//var myUtils = new MathUtils();
console.log(`${MathUtils.calculateVat(450)}`);