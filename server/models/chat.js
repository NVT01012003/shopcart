import { sequelize } from "../config/dbConnect.js";
import { DataTypes, Sequelize } from "sequelize";

export const Chat = sequelize.define(
    "chat",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        createdAt: true,
        timestamps: true,
    }
);
