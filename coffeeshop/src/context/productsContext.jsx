import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { api } from '../api/api';

const ProductContext = createContext();

function ProductsContext({ children }) {
    const [cartArray, setCartArray] = useState([]);

    const [productsList, setProductsList] = useState([]);

    const fetchProducts = async () => {
        try {
            await axios.get(api).then(res => setProductsList(res.data));
        } catch (err) {
            console.log(err);
        }
    }

    const addToCart = (id) => {
        try {
            const selectedProduct = productsList.find((pro) => pro.id === id);
            setCartArray([...cartArray, selectedProduct]); 
        } catch (err) {
            console.log(err);
        }
    }
    
    console.log(cartArray);

    useEffect(() => {
        fetchProducts();
    }, [])


    return (
        <ProductContext.Provider value={{ productsList, fetchProducts, addToCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductsContext, ProductContext };