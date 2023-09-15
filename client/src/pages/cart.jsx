import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { StoreContext } from "../context/storeContext";
import { Card } from "../components/productCad";
import { vndFormatter, usdFormatter } from "../common/currencyFormater";
import Remove from "../imgs/trash.png";
import "../styles/cart.scss";

const stands = [
    {
        id: "1",
        name: "Small Convertible Flex Bag",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: 75000,
        min_price: true,
    },
    {
        id: "1",
        name: "Louise Slide Sandal",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-5_04f1f6dd-4f7c-498b-bce7-2932fa651c00.jpg?v=1637106712&width=823",
        ],
        products: ["1", "2"],
        price: 430000,
        discount: 45000,
        min_price: true,
    },
    {
        id: "1",
        name: "Small Convertible Flex Bag",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: 0,
    },
    {
        id: "1",
        name: "Louise Slide Sandal",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-5_04f1f6dd-4f7c-498b-bce7-2932fa651c00.jpg?v=1637106712&width=823",
        ],
        products: ["1", "2"],
        price: 430000,
        discount: 45000,
        min_price: true,
    },
];

export const Cart = () => {
    const { store, setStore } = useContext(StoreContext);
    const { currentUser } = useContext(AuthContext);
    const [cart, setCart] = useState(store.cart);

    const increaseQuantity = (index) => {
        return setCart((pre) => {
            pre[index] = { ...pre[index], quantity: pre[index].quantity + 1 };
            setStore({
                ...store,
                cart: [...pre],
            });
            return [...pre];
        });
    };
    const decreaseQuantity = (index) => {
        return setCart((pre) => {
            pre[index] = { ...pre[index], quantity: pre[index].quantity - 1 };
            setStore({
                ...store,
                cart: [...pre],
            });
            return [...pre];
        });
    };

    return (
        <div className="container">
            <div className="wrapper">
                <div className="cart-wrapper">
                    {(cart.length == 0 && (
                        <div className="empty-cart">
                            <h2>Your cart is empty</h2>
                            <div className="btn-wrapper">
                                <button>
                                    <a href="/categories/products/1">
                                        Continue shopping
                                    </a>
                                </button>
                            </div>
                            {!currentUser?.user && (
                                <div>
                                    <h3>Have an account?</h3>
                                    <span>
                                        <a href="/account/signin">Log in</a> to
                                        check out faster.
                                    </span>
                                </div>
                            )}
                        </div>
                    )) || (
                        <div className="cart">
                            <div className="title">
                                <h2>Your cart</h2>
                                <a href="/categories/products/1">
                                    Continue shopping
                                </a>
                            </div>
                            <table className="products-table">
                                <thead>
                                    <tr>
                                        <th>product</th>
                                        <th>quantity</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="cart-item">
                                                    <img
                                                        src={value.photo}
                                                        alt={value.name}
                                                    />
                                                    <div>
                                                        <h4>{value.name}</h4>
                                                        <span>
                                                            {currentUser.country ==
                                                            "Viet Nam"
                                                                ? vndFormatter.format(
                                                                      value.price
                                                                  )
                                                                : usdFormatter.format(
                                                                      value.price /
                                                                          23000
                                                                  )}
                                                        </span>
                                                        <span className="color">
                                                            Color: {value.color}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="quantity-wrapper">
                                                    <div className="quantity">
                                                        <div>
                                                            <span
                                                                className={
                                                                    value.quantity ==
                                                                    1
                                                                        ? "disable"
                                                                        : ""
                                                                }
                                                                onClick={() => {
                                                                    if (
                                                                        value.quantity !=
                                                                        1
                                                                    )
                                                                        return decreaseQuantity(
                                                                            index
                                                                        );
                                                                }}
                                                            >
                                                                -
                                                            </span>
                                                            <span>
                                                                {value.quantity}
                                                            </span>
                                                            <span
                                                                onClick={() =>
                                                                    increaseQuantity(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                +
                                                            </span>
                                                        </div>
                                                        <img
                                                            src={Remove}
                                                            alt="remove"
                                                            onClick={() => {
                                                                setCart(
                                                                    (pre) => {
                                                                        pre.splice(
                                                                            index,
                                                                            1
                                                                        );
                                                                        setStore(
                                                                            (
                                                                                store
                                                                            ) => ({
                                                                                ...store,
                                                                                cart: [
                                                                                    ...pre,
                                                                                ],
                                                                            })
                                                                        );
                                                                        return [
                                                                            ...pre,
                                                                        ];
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    {currentUser.country ==
                                                    "Viet Nam"
                                                        ? vndFormatter.format(
                                                              value.price *
                                                                  value.quantity
                                                          )
                                                        : usdFormatter.format(
                                                              value.price *
                                                                  value.quantity
                                                          )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="footer-wrapper">
                                <div className="subtotal-wrapper">
                                    <span className="subtotal">
                                        <span>Subtotal</span>
                                        {((user, cart) => {
                                            let total = 0;
                                            cart.forEach((value) => {
                                                total +=
                                                    value.price *
                                                    value.quantity;
                                            });
                                            if (user.country == "Viet Nam")
                                                return vndFormatter.format(
                                                    total
                                                );
                                            return usdFormatter.format(total);
                                        })(currentUser, cart)}
                                    </span>
                                    <span className="taxes">
                                        Taxes and shipping calculated at
                                        checkout
                                    </span>
                                    <div className="btn-wrapper">
                                        <button>
                                            <a href="/categories/products/1">
                                                Check out
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="suggest-wrapper">
                        <h3 className="title">You may also like</h3>
                        <div id="products">
                            {stands.map((value, index) => (
                                <Card item={value} key={index} />
                            ))}
                        </div>
                        <div className="btn-wrapper">
                            <button>
                                <a href="/categories/products/1">View all</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
