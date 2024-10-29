

// formas de criar objecto: objecto literal, atraves de função, atraves de classs//

const Nilton = { 
    firstName: "Luz",
    age: 21,
    nickName: "Da",
    lastName: "Jorge",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    getAge: function() {
        return this.age;
    },
    showName(template){
        console.log(template + " " + this.firstName);

       
    },

    getName: function() {
        return this.nickName;
    }
};




// Atualizando valores
Nilton.nickName = "Monteiro";
Nilton.age = 23;

// Exibindo os valores atualizados e as novas propriedades
console.log(Nilton.nickName);   // "Monteiro"
console.log(Nilton.age);        // 23
console.log(Nilton.address);    // undefined (propriedade ainda não existe)
Nilton.address = "Santiago";    // Adicionando nova propriedade
console.log(Nilton.address);    // "Santiago"

// Chamando métodos
console.log(Nilton.getAge());   // 23
console.log(Nilton.getName());  // "Monteiro"
console.log(Nilton.fullName());
(Nilton.showName("Sou"));

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
} 


const Adriano = new Person("Adriano", "Lima");
console.log("Seu nome é ", Adriano.firstName );

class people{

    constructor(name){
        this.name = name;

    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name.name;
    }
}
const Danielson = new people("Danielson");

console.log(Danielson.getName());
Danielson.setName("Denis");





