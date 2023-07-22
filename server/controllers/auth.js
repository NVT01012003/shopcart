import { User } from "../models/user.js";

export const createUser = async (data) => {
    const user = await User.create(data);
    return user;
};

export const findUser = async (id) => {
    const user = await User.findOne({
        attributes: ["id", "first_name", "last_name", "is_admin", "address"],
        where: {
            id,
        },
    });
    return user;
};

export const findUserByEmail = async (email) => {
    const user = await User.findOne({
        attributes: [
            "id",
            "first_name",
            "last_name",
            "is_admin",
            "address",
            "oauthid",
        ],
        where: {
            email,
        },
    });
    return user;
};

export const findAllUser = async () => {
    const users = await User.findAll({
        attributes: ["id", "first_name", "last_name", "is_admin", "address"],
    });
    return users;
};
