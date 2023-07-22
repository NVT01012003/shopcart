import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Blog = sequelize.define(
    "blog",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        title_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content_image: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
