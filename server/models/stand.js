import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Stand = sequelize.define(
    "stand",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        photos: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
