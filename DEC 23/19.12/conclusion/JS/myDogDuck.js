const dogURL = "http://random.dog/woof.json";
const foxURL = "http://randomfox.ca/floof"

class Dog {
    constructor(dogURL){
        this.dogURL = dogURL;
    }
    get getDogAPI(){
        fetch(this.dogURL).then((jsonObject)=>{
            jsonObject.json().then((jsonData)=>{
                dogImg.src = jsonData.url;
            })
        })
    }
}

class Fox extends Dog{
    get getFoxAPI(){
        fetch(this.fox).then((jsonObject)=>{
            jsonObject.json().then((jsonData)=>{
                dogImg.src = jsonData.url;
            })
        })
    }
}

var jasper = new Dog (dogURL);
console.log(jasper);
