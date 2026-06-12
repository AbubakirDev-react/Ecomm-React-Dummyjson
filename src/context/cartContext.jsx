import { createContext, useContext, useState, useEffect } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null);

export default function CartProvider({children}){
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        try {
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(productId){
        const existing = cartItems.find((item) => item.id === productId);
        if(existing){
            setCartItems(cartItems.map(item => 
                item.id === productId ? {...item, quantity: item.quantity + 1} : item
            ));
        } else {
            setCartItems([...cartItems, {id: productId, quantity: 1}]);
        }
    }

    // BUG 1: getCIWP ni tuzatish - state dan o'qish kerak, localStorage dan emas
    function getCIWP(){
        return cartItems.map((item) => ({
            ...item,
            product: getProductById(item.id)
        })).filter((item) => item.product);
    }

    function removeFromCart(productId) {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    }

    // BUG 2: getCartTotal ni tuzatish
    function getCartTotal(){
        const total = cartItems.reduce((sum, item) => {
            const product = getProductById(item.id);
            if (product && product.price) {
                return sum + (product.price * item.quantity);
            }
            return sum;
        }, 0);
        return total;
    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems(
            cartItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            getCIWP, 
            getCartTotal, 
            updateQuantity, 
            clearCart,  // clearCart bor
            removeFromCart 
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}