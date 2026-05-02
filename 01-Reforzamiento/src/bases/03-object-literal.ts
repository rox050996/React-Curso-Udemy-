const person={
    firstName:'Rox',
    lastName:'Stark',
    age:45
}

const spiderman = structuredClone(person);

spiderman.firstName='Peter';
spiderman.lastName='Parker';
spiderman.age=23;

console.log(person, spiderman)