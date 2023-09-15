import { Cart } from "../models/cart.js";
import { getQuantity } from "./product.js";

export const getCart = async (userId) => {
    const cart = await Cart.findAll({
        attribute: "productId",
        where: {
            userId,
        },
    });
    return cart.dataValues;
};

export const addProduct = async ({ userId, productId }) => {
    const cart = await Cart.create({
        userId,
        productId,
    });
    return cart.dataValues;
};

export const updateQuantity = async ({ userId, productId, quantity }) => {
    const product_quantity = await getQuantity(productId);
    if (product_quantity >= quantity)
        var update_quantity = await Cart.update(
            {
                quantity,
            },
            {
                where: {
                    productId,
                    userId,
                },
            }
        );
    else throw new Error("Quantity exceeds the limit");
    return update_quantity.dataValues;
};

export const removeProduct = async ({ productId, userId }) => {
    const product = await Cart.destroy({
        where: {
            userId,
            productId,
        },
    });
    return product;
};
