//import mongoose to create new schema
const mongoose = require('mongoose');

//create Schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

//export this Schema
module.export = mongoose.model('todo', TodoItemSchema);