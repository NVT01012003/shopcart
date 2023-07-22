import { User } from "../models/user.js";
import { Product } from "../models/product.js";
import { Specifications } from "../models/specifications.js";
import { Order_Detail } from "../models/order_detail.js";
import { Order_Item } from "../models/order_item.js";
import { Delivery } from "../models/delivery.js";
import { Chat } from "../models/chat.js";
import { Message } from "../models/message.js";
import { Blog } from "../models/blog.js";

// foreign key from users.id to order_details.userId
User.hasMany(Order_Detail, {
    sourceKey: "id",
});
Order_Detail.belongsTo(User, {
    targetKey: "id",
});
// from products.id to specifications.productId
Product.hasOne(Specifications, {
    sourceKey: "id",
});
Specifications.belongsTo(Product, {
    targetKey: "id",
});
// order_details to products through order_items
Product.belongsToMany(Order_Detail, { through: Order_Item, sourceKey: "id" });
Order_Detail.belongsToMany(Product, { through: Order_Item, sourceKey: "id" });
Order_Item.belongsTo(Product, { targetKey: "id" });
Order_Item.belongsTo(Order_Detail, { targetKey: "id" });
// order_details.id to deliveries.orderDetailId
Order_Detail.hasOne(Delivery, { sourceKey: "id" });
Delivery.belongsTo(Order_Detail, { targetKey: "id" });
// users.id to chats.userId
User.hasOne(Chat, { sourceKey: "id" });
Chat.belongsTo(User, { targetKey: "id" });
// chats.id to message.chatId
Chat.hasOne(Message, { sourceKey: "id" });
Message.belongsTo(Chat, { targetKey: "id" });
