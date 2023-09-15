import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Address = sequelize.define("address", {
    address_name: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    default: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
});
