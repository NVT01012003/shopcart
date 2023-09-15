import { User } from "../models/user.js";
import { Address } from "../models/address.js";

export const createUser = async (data) => {
    const user = await User.create(data);
    return user.dataValues;
};

export const findUser = async (id, password = false) => {
    const attributes = !password
        ? ["id", "first_name", "last_name", "is_admin", "oauthid", "country"]
        : [
              "id",
              "first_name",
              "last_name",
              "is_admin",
              "oauthid",
              "country",
              "password",
          ];
    let user = await User.findOne({
        attributes,
        where: {
            id,
        },
    });
    if (user) {
        const address = await Address.findAll({
            attributes: ["address_name", "address", "default"],
            where: {
                userId: id,
            },
        });
        user = { ...user.dataValues, address: address.dataValues };
    }
    return user;
};

export const findUserByEmail = async (email, password = false) => {
    const attributes = !password
        ? ["id", "first_name", "last_name", "is_admin", "oauthid", "country"]
        : [
              "id",
              "first_name",
              "last_name",
              "is_admin",
              "oauthid",
              "country",
              "password",
          ];
    let user = await User.findOne({
        attributes,
        where: {
            email,
        },
    });
    if (user) {
        const address = await Address.findAll({
            attributes: ["address_name", "address", "default"],
            where: {
                userId: user.id,
            },
        });
        user = { ...user.dataValues, address: address.dataValues };
    }
    return user;
};
export const findAdminByEmail = async (email, password = false) => {
    const attributes = !password
        ? ["id", "first_name", "last_name", "is_admin", "oauthid", "country"]
        : [
              "id",
              "first_name",
              "last_name",
              "is_admin",
              "oauthid",
              "country",
              "password",
          ];
    let user = await User.findOne({
        attributes,
        where: {
            email,
            is_admin: true,
        },
    });
    if (user) {
        const address = await Address.findAll({
            attributes: ["address_name", "address", "default"],
            where: {
                userId: user.id,
            },
        });
        user = { ...user.dataValues, address: address.dataValues };
    }
    return user;
};

export const updatePassword = async ({ password, id }) => {
    const user = await User.update(
        { password },
        {
            where: {
                id,
            },
            returning: true,
        }
    );
    return user.dataValues;
};

export const findAllUser = async () => {
    const users = await User.findAll({
        attributes: ["id", "first_name", "last_name", "is_admin", "country"],
    });
    return users.dataValues;
};
