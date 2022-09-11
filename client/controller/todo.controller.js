import axios from "axios";

export const index = (req, res) => {
    axios({
        method: "get",
        url: "http://localhost:3000/todo",
    })
    .then(data => {
        res.render("index", {
            data: data.data,
            status: 'all'
        });
    })
    .catch( err => {
        res.send(err.message);
    });
}

export const create = (req, res) => {
    if(!req.body.title){
        return res.redirect("/");
    };

    const todo = {
        title: req.body.title,
    };

    axios({
        method: "post",
        url: "http://localhost:3000/todo",
        data: todo
    }).then(data => {
        res.redirect("/");
    }).catch( err => {
        res.send(err.message);
    });

}

export const deleteData = (req, res) => {
    const id = req.body.id;
    axios({
        method: "delete",
        url: "http://localhost:3000/todo/" + id
    });

    res.redirect("/");
}

export const getActiveTodo = (req, res) => {
    axios({
        method: "get",
        url: "http://localhost:3000/todo/active"
    }).then(data => {
        res.render("index", {
            data: data.data,
            status: "active"
        });
    }).catch( err => {
        res.send(err.message);
    });
}

export const getCompletedTodo = (req, res) => {
    axios({
        method: "get",
        url: "http://localhost:3000/todo/completed"
    }).then(data => {
        res.render("index", {
            data: data.data,
            status: "completed"
        });
    }).catch( err => {
        res.send(err.message);
    });
}

export const edit = (req, res) => {
    axios({
        method: "get",
        url: "http://localhost:3000/todo",
    }).then(data => {
        const id = req.params.id;
        data.data.forEach(oldTodo => {
            if(oldTodo.id == id ){
                res.render("edit", {
                    data: data.data,
                    oldTodo: oldTodo,
                });
            };
        });

    })
    .catch( err => {
        res.send(err.message);
    });
}

export const update = (req, res) => {
    const id = req.params.id;
    const todo = {
        title: req.body.title,
    };
    axios({
        method: "put",
        url: "http://localhost:3000/todo/" + id,
        data: todo
    })
    .then(data => {
        res.redirect("/");
    })
    .catch( err => {
        res.send(err.message);
    });
}

export const changeStatus = (req, res) => {
    const id = req.params.id;
    let status = req.body.complete;
    status == "true" ? status = false : status = true;

    axios({
        method: "put",
        url: "http://localhost:3000/todo/" + id,
        data: { complete: status }
    });
    
    res.redirect("/");
}