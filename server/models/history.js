import { sequelize } from "../config/dbConnect.js";

export const History = sequelize.define(
    "history",
    {},
    {
        createdAt: true,
        updatedAt: true,
    }
);
