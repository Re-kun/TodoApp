module.exports = app => {
    const todo = require("../controller/todo.controller");
    let router = require("express").Router();

    router.get("/", todo.getData);
    router.get("/active", todo.getActiveTodo);
    router.get("/completed", todo.getCompletedTodo);
    router.post("/", todo.createData);
    router.delete("/:id", todo.deleteData);
    router.put("/:id", todo.updateData);

    app.use("/todo", router );
};