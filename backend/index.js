
// write basic express boilerplate code
// with express.json middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo", function(res, rej) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.statusCode(411).json({
            msg: "you sent wrong inputs",
        })
        return;
    }
    // put it in mangodb
})

app.get("/todos", function(res, rej){
    

})

app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedUpdateload = updateTodo.safeParse(updatePayload)
    if(!parsedUpdateload.success) {
        res.statusCode(411).json({
            msg: "you sent wrong inputs",
        })
        return;   
    }
})

app.listen(3000);