import { Sequelize } from "sequelize";
import db from "../models/index.js";

const { DataTypes } = Sequelize;

const Todos = db.define("todos", {
    title: {
        type: DataTypes.STRING
    },
    complete: {
        type: DataTypes.BOOLEAN
    }
},
{
    freezeTableName: true
});

export default Todos;
