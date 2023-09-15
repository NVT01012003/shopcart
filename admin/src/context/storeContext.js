import { createContext, useReducer } from "react";

export const StoreContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return { ...state, users: action.users };
        case "ADD_PRODUCTS":
            return { ...state, products: action.products };
        default:
            return state;
    }
};

export const StoreContextProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, {});

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
