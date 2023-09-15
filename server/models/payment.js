import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Payment = sequelize.define("payment", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
