import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const App_Config = sequelize.define(
    "config",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        banner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        products_recommendation: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
        },
        back_in_stock: {
            type: DataTypes.UUID,
            allowNull: true,
        },
    },
    {
        createdAt: true,
        updatedAt: true,
    }
);
