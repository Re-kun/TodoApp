import  express  from "express";
import router from "./route/todo.route.js";
const app = express();

app.set('views', 'views')
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(router);

app.listen(8080, () => {
    console.log("List any thing in here -> http://localhost:" + PORT);
});
