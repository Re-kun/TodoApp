import Todos from "../models/Todo.models.js";

export const getData = async (req, res) => {
    try{
        const data = await Todos.findAll();   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};

export const createData = async (req, res) => {
    try{
        if(!req.body.title){
            res.status(400).send({ message: "This content can't be empty" });
        };

        const todo = {
            title: req.body.title,
            complete: req.body.complete ? req.body.complete : false
        };

        const data = await Todos.create(todo);   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};

export const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        await Todos.destroy({ where: {id: id} });
    }
    catch {
        res.status(500).send({ message: "Something wrong i can feel it" });
    }
};

export const updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Todos.update(req.body, { where: {id:id} });   
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

export const getActiveTodo = async (req, res) => {
    try{
        const data = await Todos.findAll({ where: {complete: false} });   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};

export const getCompletedTodo = async (req, res) => {
    try{
        const data = await Todos.findAll({ where: {complete: true} });   
        res.status(200).send(data);
    }
    catch { 
        res.status(500).send({ message: "Something wrong i can feel it" });
    };
};