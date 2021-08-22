function Person(name, age) {
    //1. No object created at this point
    

    //2. add the required property and methods to 'this' reference
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log(`Person{name:${this.name},age:${this.age}}`);
    }
    this.eat = function (food) {
        //this.name represents name of the person. 'this' represents current object
        //food is not part of person. it is an external entity passed as parameter. we don't use this
        console.log(`${this.name} eats ${food}`);
    }

    //3. we don't need to return any object here
    
}

let p=new Person("Vivek",100); 


let people=[
    new Person('Vivek',100),
    new Person('Shivanshi',15),
    new Person('Sanjay',50)
]

for(let person of people){

    for(let property in person){
        console.log(property, person[property])
    }
    console.log();
}