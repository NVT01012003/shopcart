import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Message = sequelize.define(
    "message",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        text: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
        media: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
