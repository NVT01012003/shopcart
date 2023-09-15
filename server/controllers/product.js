import { Op } from "sequelize";
import { Product } from "../models/product.js";
import { Specifications } from "../models/specifications.js";

export const getProduct = async (id) => {
    const product = await Product.findOne({
        where: {
            id,
        },
    });
    const specifications = await Specifications({
        where: {
            productId: id,
        },
    });
    return { ...product.dataValues, specifications: specifications.dataValues };
};

export const getProducts = async (ids) => {
    const products = await Product.findAll({
        where: {
            [Op.or]: ids.map((value) => ({ id: value })),
        },
    });
    return products;
};

export const getQuantity = async (id) => {
    const quantity = await Product.findOne({
        attributes: ["quantity"],
        where: {
            id,
        },
    });
    return quantity.dataValues.quantity;
};

export const updateProduct = async ({ data, id }) => {
    const product = await Product.update(data, {
        where: {
            id: id,
        },
    });
    return product;
};

export const removeProduct = async (id) => {
    const product = await Product.destroy({
        where: {
            id,
        },
    });
    return product;
};

export const getAllProducts = async () => {
    const products = await Product.findAll();
    return products;
};

export const addProduct = async (data) => {
    const product = await Product.create(data);
    return product;
};
