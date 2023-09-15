import { createContext, useState } from "react";
export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
    const [store, setStore] = useState({
        cart: [
            {
                id: "1",
                name: "Small Convertible Flex Bag",
                photo: "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
                price: 395000,
                color: "Cylemen",
                quantity: 1,
            },
            {
                id: "1",
                name: "Louise Slide Sandal",
                photo: "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
                price: 430000,
                color: "Cylemen",
                quantity: 1,
            },
            {
                id: "1",
                name: "Louise Slide Sandal",
                photo: "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
                price: 430000,
                color: "Cylemen",
                quantity: 1,
            },
        ],
    });
    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    );
};
