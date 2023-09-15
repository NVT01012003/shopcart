import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Contact = sequelize.define("contact", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    youtube: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tiktok: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
