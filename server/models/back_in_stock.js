import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Back_In_Stock = sequelize.define(
    "back_in_stock",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        bags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shoes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        products: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
