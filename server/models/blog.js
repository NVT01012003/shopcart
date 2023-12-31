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
        article_photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
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
