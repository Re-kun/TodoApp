import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./route/todo.route.js";
import db from "./models/index.js";
// import Todos from "./models/Todo.models.js";
const app = express();

const whiteList = ['localhost:8081'];
let corsOption = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1 || !origin){
            return callback(null, true);
        }else{
            return callback(new Error({
                 message: "you are not allowed by cors"
            }));
        };
    }
};

// Sync db 
try {
    await db.authenticate()
    console.log("database Connected...")
    // await Todos.sync()
}
catch (error) {
    console.log(error.message);
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});