import { getData, getActiveTodo, getCompletedTodo, createData, deleteData, updateData } from "../controller/todo.controller.js";
import express from "express";

let router = express.Router();
router.get("/todo", getData);
router.get("/todo/active", getActiveTodo);
router.get("/todo/completed", getCompletedTodo);
router.post("/todo/", createData);
router.delete("/todo/:id", deleteData);
router.put("/todo/:id", updateData);

export default router;