const mongoose = require('mongoose');

mongoose.set('strictQuery',false)

const url = process.env.CONNECTION_STRING;

// console.log("Connection URL:",url);

mongoose.connect(url).then((result)=>{
    console.log('connected to MongoDB');
}).catch((err)=>{
    console.log('error connecting to MongoDB:',err.message);
})


const personSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength: 3,
        required: true,
        unique: true
    },
    number: {
        type:String,
        minLength: 8,
        required: true,
        validate:{
            validator: function(v){
                return/^\d{2,4}-\d+$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`

        }
    }
})

personSchema.set('toJSON',{
    transform: (document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model('Person',personSchema,'persons');