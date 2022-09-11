const db = require("../models");

exports.getData = async (req, res) => {
    try{
        const data = await db.Todo.findAll();   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};

exports.createData = async (req, res) => {
    try{
        if(!req.body.title){
            res.status(400).send({ message: "This content can't be empty" });
        };

        const todo = {
            title: req.body.title,
            complete: req.body.complete ? req.body.complete : false
        };

        const data = await db.Todo.create(todo);   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        await db.Todo.destroy({ where: {id: id} });
    }
    catch {
        res.status(500).send({ message: "Something wrong i can feel it" });
    }
};

exports.updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.Todo.update(req.body, { where: {id:id} });   
        if(result == 1){
            res.status(200).send({ message: "Data was successfully updated" });
        }else{
            res.status(400).send({ message: "Can't update data with id = " + id });
        };
    }
    catch(err){
        res.status(500).send({ message: err.message || "Something wrong i can feel it" });

    };
};

exports.getActiveTodo = async (req, res) => {
    try{
        const data = await db.Todo.findAll({ where: {complete: false} });   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};

exports.getCompletedTodo = async (req, res) => {
    try{
        const data = await db.Todo.findAll({ where: {complete: true} });   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};