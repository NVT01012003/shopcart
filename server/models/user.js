import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
            unique: true,
        },
        oauthid: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: null,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: "Viet Nam",
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                name: "idx_user_first_name",
                using: "BTREE",
                fields: ["first_name"],
            },
            {
                name: "idx_user_last",
                using: "BTREE",
                fields: ["last_name"],
            },
            {
                name: "idx_user_email",
                using: "BTREE",
                fields: ["email"],
            },
        ],
        createdAt: true,
        timestamps: true,
    }
);
