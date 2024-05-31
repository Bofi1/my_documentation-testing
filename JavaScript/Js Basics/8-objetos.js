const person = {        // como crear un objeto
    age: 30,
    name: 'John',
    gender: 'male'
};




const person = {          // como llamarlo
  age: 30,
  name: 'John',
  gender: 'male'
};


const person = {            // puedes meter objetos dentro de otros
name: 'Alice',
age: 27,
address: {
  street: 'Elm',
  city: 'NY',
  state: 'NY',
  zip: '10001'
}
};

console.log(person.address.state); // 'NY'

console.log(person.age); // 27



const person = {              // puedes agregar propiedades a un objeto despues
age: 30,
name: 'John',
gender: 'male'
};
person.job = 'developer';
console.log(person.job);


delete person.age;          // tambien puedes eliminar propiedades