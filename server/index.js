const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./route/todo.route')(app);
app.get("/", (req, res) => {
    res.json({
        message: "welcome"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});