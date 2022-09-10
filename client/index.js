import  express  from "express";
import router from "./route/todo.route.js";
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(router)
app.get("/", (req, res) => {
    res.send("welcome")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("welcome")
});