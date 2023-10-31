class person{
    constructor (name,age){
        this.name = name;
        this.age= age;
    }

    set personName(name){
        this.name = name;
    }
    get personInfo(){
        return `Person Name: ${this.name}, Age:${this.age}`;
    }
}
let personOne = new person("Arif",21)
console.log(personOne);

console.log(personOne.personInfo);