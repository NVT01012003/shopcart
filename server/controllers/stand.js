import { Stand } from "../models/stand.js";
import { sequelize } from "../config/dbConnect.js";
import { QueryTypes } from "sequelize";

export const createStand = async (data) => {
    const stand = await Stand.create(data);
    return stand;
};

export const searchStand = async ({ category, search }) => {
    if (category)
        var stands = await Stand.findAll({
            where: {
                category,
            },
        });
    else
        var stands = sequelize.query(
            `select * from stands where name like '%${search}%';`,
            {
                bind: "active",
                type: QueryTypes.SELECT,
            }
        );
    return stands;
};

export const removeStand = async (id) => {
    const stand = await Stand.destroy({
        where: {
            id,
        },
    });
    return stand;
};
