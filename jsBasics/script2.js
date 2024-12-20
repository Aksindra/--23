
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};


person.email = "john.doe@example.com";


delete person.age;


console.log("Updated person object:", person);
