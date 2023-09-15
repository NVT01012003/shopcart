import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Comment = sequelize.define("comment", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    text: {
        type: DataTypes.TEXT,
        defaultValue: null,
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
    },
    media: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
