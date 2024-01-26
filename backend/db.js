
/*
Todo {
    title : string,
    description : string,
    completed : boolean
}

*/

//mongo url 
//  mongodb+srv://kale42701:lfOmf97q2wIPe8M1@cluster0.mgggyf6.mongodb.net/todos

const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://kale42701:lfOmf97q2wIPe8M1@cluster0.mgggyf6.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean 

})

const todo = mongoose.model('todos', todoSchema);

module.exports ={
    todo
}