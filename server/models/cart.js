import { sequelize } from "../config/dbConnect.js";

export const Cart = sequelize.define(
    "cart",
    {},
    {
        createdAt: true,
        timestamps: true,
    }
);
