import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Order_Detail = sequelize.define(
    "order_detail",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
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
