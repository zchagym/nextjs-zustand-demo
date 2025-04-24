import { createContext, useContext, useRef } from "react";
import { createUserStore } from "../stores/userStore";
import { createCartStore } from "../stores/cartStore";
import { createUIStore } from "../stores/uiStore";

// 创建 Context
const UserContext = createContext(null);
const CartContext = createContext(null);
const UIContext = createContext(null);

export const useUserStore = () => useContext(UserContext);
export const useCartStore = () => useContext(CartContext);
export const useUIStore = () => useContext(UIContext);

// 多 store Provider，一次性水合
function Providers({ children, initialStates = {} }) {
    const userStoreRef = useRef();
    const cartStoreRef = useRef();
    const uiStoreRef = useRef();

    if (!userStoreRef.current) userStoreRef.current = createUserStore(initialStates.user);
    if (!cartStoreRef.current) cartStoreRef.current = createCartStore(initialStates.cart);
    if (!uiStoreRef.current) uiStoreRef.current = createUIStore(initialStates.ui);

    return (
        <UserContext.Provider value={userStoreRef.current}>
            <CartContext.Provider value={cartStoreRef.current}>
                <UIContext.Provider value={uiStoreRef.current}>
                    {children}
                </UIContext.Provider>
            </CartContext.Provider>
        </UserContext.Provider>
    );
}

export default function MyApp({ Component, pageProps }) {
    return (
        <Providers initialStates={pageProps.initialStates}>
            <Component {...pageProps} />
        </Providers>
    );
}
