import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../service/CategoryService";
import {fetchItems} from "../service/ItemService.js";
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(null);
export const AppContextProvider = (props) => {
    const [categories, setCategories] = useState([])
    const [itemsData, setItemsData] = useState([])
    const [auth, setAuth] = useState({token: null, role: null});
    const [cartItems,setCartItems] = useState([]);
    const addToCart = (item) => {
       const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
       if (existingItem) {
           setCartItems(cartItems.map(cartItem => cartItem.name === item.name ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
       }else{
           setCartItems([...cartItems, {...item, quantity: 1}]);
       }
    }
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.itemId !== itemId));
    }
    const updateQuantity = (itemId, newQuantity ) => {
        setCartItems(cartItems.map(item => item.itemId === itemId ? {...item, quantity: newQuantity} : item));
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const token = localStorage.getItem('token');
                const role = localStorage.getItem('role');

                if (token && role) {
                    setAuthData(token, role);
                }

                const [categoriesResponse, itemsResponse] = await Promise.all([
                    fetchCategories(),
                    fetchItems()
                ]);

                setCategories(categoriesResponse.data);
                setItemsData(itemsResponse.data);
            } catch (error) {
                console.error('Error loading data:', error);
                // Optionally set error state here
            }
        };

        loadData();
    }, []);

    const setAuthData = (token, role) => {
        setAuth({token, role});
    }

    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData,
        addToCart,
        cartItems,
        removeFromCart,
        updateQuantity,
    }
    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}
