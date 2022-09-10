import express from 'express';
import { index, create, deleteData, getActiveTodo, getCompletedTodo, edit, update, changeStatus } from '../controller/todo.controller.js';
const router = express.Router();

router.get("/", index);
router.get("/active", getActiveTodo);
router.get("/completed", getCompletedTodo);
router.get("/edit/:id", edit);
router.post("/update/:id", update);
router.post("/changeStatus/:id", changeStatus);
router.post("/create", create);
router.post("/delete", deleteData);

export default router;