import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnect.js";

export const Cart = sequelize.define(
    "cart",
    {
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
