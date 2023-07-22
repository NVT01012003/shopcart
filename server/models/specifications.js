import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Specifications = sequelize.define(
    "specifications",
    {
        height: {
            type: DataTypes.DECIMAL,
            defaultValue: null,
            allowNull: true,
        },
        width: {
            type: DataTypes.DECIMAL,
            defaultValue: null,
            allowNull: true,
        },
        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        brand: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        material: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_specifications_color",
                using: "BTREE",
                fields: ["color"],
            },
            {
                name: "idx_specifications_brand",
                using: "BTREE",
                fields: ["brand"],
            },
        ],
    }
);
