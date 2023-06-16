import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [loader, setLoader] = useState(false);
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState([]);
    const [wishlistItems, setWishlist] = useState([]);
    const location = useLocation();

// console.log(user);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
        console.log(items);
    };

    const handleAddToWishlist = (product) => {
        let items = [...wishlistItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index === -1) {
            items = [...items, product];
        } 
        setWishlist(items);
        // console.log(items);
    };

    const handleRemoveFromWishlist = (product) => {
        let items = [...wishlistItems];
        items = items?.filter((p) => p.id !== product?.id);
        setWishlist(items);
    };
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                auth,
                setAuth,
                handleAddToWishlist,
                handleRemoveFromWishlist,
                wishlistItems,
                setWishlist,
                user,
                setUser,
                loader,
                setLoader,
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;