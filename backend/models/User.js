const mongoose = require('mongoose')
const { Schema } = mongoose
console.log("im in user.js")
const Userschema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const mydata = mongoose.model('mydata', Userschema)
const newdata = new mydata({
    name: "fghfhgfh",
    location: "ksjfl",
    password: "skjfs",
    email: "123@gmail.com"
})

async function saveData() {
    try {
        const result = await newdata.save();
        console.log('Data saved to MongoDB Atlas:', result);
    } catch (err) {
        console.error('Error saving data:', err);
    }
}

saveData();
/*async function run() {
const Person = mongoose.model('Person', Userschema);
await Person.create({ name: 'Axl Rose' });
}
run();*/
module.exports = mongoose.model('user', Userschema)