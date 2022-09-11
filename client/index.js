import  express  from "express";
import router from "./route/todo.route.js";
const app = express();

app.set('views', 'client/views')
app.set('view engine', 'ejs');
app.use(express.static('client/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("List any thing in here -> http://localhost:" + PORT);
});