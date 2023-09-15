import { sequelize } from "../config/dbConnect.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define(
    "product",
    {
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
        desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        sale: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        discount: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: null,
        },
        photo: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                name: "idx_product_name",
                using: "BTREE",
                fields: ["name"],
            },
            {
                name: "idx_product_category",
                using: "BTREE",
                fields: ["category"],
            },
            {
                name: "idx_product_price",
                using: "BTREE",
                fields: ["price"],
            },
        ],
    }
);
