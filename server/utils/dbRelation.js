import { User } from "../models/user.js";
import { Product } from "../models/product.js";
import { Specifications } from "../models/specifications.js";
import { Order_Detail } from "../models/order_detail.js";
import { Order_Item } from "../models/order_item.js";
import { Delivery } from "../models/delivery.js";
import { Chat } from "../models/chat.js";
import { Message } from "../models/message.js";
import { Blog } from "../models/blog.js";
import { Blog_Content } from "../models/blog_content.js";
import { Cart } from "../models/cart.js";
import { Address } from "../models/address.js";
import { App_Config } from "../models/app_config.js";
import { Payment } from "../models/payment.js";
import { Comment } from "../models/comment.js";
import { Stand } from "../models/stand.js";
import { Contact } from "../models/contact.js";
import { History } from "../models/history.js";

// foreign key from users.id to order_details.userId
User.hasMany(Order_Detail, {
    sourceKey: "id",
});
Order_Detail.belongsTo(User, {
    targetKey: "id",
});
// users.id to addresses.userId
User.hasMany(Address, { sourceKey: "id" });
Address.belongsTo(User, { targetKey: "id" });
// products.id to specifications.productId
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
// users to products through carts
Product.belongsToMany(User, { through: Cart, sourceKey: "id" });
User.belongsToMany(Product, { through: Cart, sourceKey: "id" });
Cart.belongsTo(User, { targetKey: "id" });
Cart.belongsTo(Product, { targetKey: "id" });
// blogs.id to blog_contents.blogId
Blog.hasMany(Blog_Content, { sourceKey: "id" });
Blog_Content.belongsTo(Blog, { targetKey: "id" });
// configs.id to payments.configId
App_Config.hasMany(Payment, { sourceKey: "id" });
Payment.belongsTo(App_Config, { targetKey: "id" });
// comments.id to stands.commentId
Comment.hasOne(Stand, { sourceKey: "id" });
Stand.belongsTo(Stand, { targetKey: "id" });
// contacts.id to configs.contactId
Contact.hasOne(App_Config, { sourceKey: "id" });
App_Config.belongsTo(Contact, { targetKey: "id" });
// users to products through histories
User.belongsToMany(Product, { through: History, sourceKey: "id" });
Product.belongsToMany(User, { through: History, sourceKey: "id" });
History.belongsTo(User, { targetKey: "id" });
History.belongsTo(Product, { targetKey: "id" });
