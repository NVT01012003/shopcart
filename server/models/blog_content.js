import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Blog_Content = sequelize.define(
    "blog_content",
    {
        index: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        product: {
            type: DataTypes.UUID,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
