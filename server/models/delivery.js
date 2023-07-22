import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Delivery = sequelize.define(
    "delivery",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        from: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        to: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
