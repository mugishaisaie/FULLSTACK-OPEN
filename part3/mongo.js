const mongoose = require('mongoose');

if(process.argv.length <3){
    console.log(
        'Please provide the password as an argument: node mongo.js <password>'
    )
    process.exit(1);
}

const password = process.argv[2];
// console.log(password)

const url =`mongodb+srv://isaie:${password}@backend.2ywvipu.mongodb.net/phonebook?retryWrites=true&w=majority&appName=phonebook`;

mongoose.connect(url);
// create a schema
const personSchema = new mongoose.Schema({
    name:String,
    number: String
})
// create a model
const Person = mongoose.model('Person',personSchema, 'persons');


if(process.argv.length === 3){
    Person.find({}).then((result)=>{
    result.forEach((person)=>{
        console.log(person)
    })
    mongoose.connection.close();
})

}else{
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })


    return person.save().then(result=>{
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
}).catch(err=>{
    console.error('Error saving person:', err);
    mongoose.connection.close();
})
}
    






