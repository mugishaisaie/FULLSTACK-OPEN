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

const personSchema = new mongoose.Schema({
    name:String,
    number: String
})

mongoose.connect(url).then(()=>{
    console.log('Connected to MongoDB');
    console.log(mongoose.connection.name);
    console.log(Person.collection.name)
    
const person = new Person({
    name: 'Isaie',
    number: 123456789
})


 return person.save();


}).then(result=>{
    console.log('Person saved!');
    mongoose.connection.close();
}).catch(err=>{
    console.error('Error saving person:', err);
    mongoose.connection.close();
})
const Person = mongoose.model('Person',personSchema, 'persons');


