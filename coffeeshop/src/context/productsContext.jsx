import React, { createContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { api } from '../api/api';

const ProductContext = createContext();

function ProductsContext({ children }) {
    const [cartArray, setCartArray] = useState([]);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(api);
            setProductsList(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    const memoizedProductsList = useMemo(() => productsList, [productsList]);

    const fetchSingleProduct = (id) => {
        const singleProduct = memoizedProductsList.find((pro) => pro.id === id);
        console.log(singleProduct);
    }


    const addToCart = (id) => {
        try {
            const selectedProduct = memoizedProductsList.find((pro) => pro.id === id);
            setCartArray([...cartArray, selectedProduct]);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ProductContext.Provider value={{ productsList: memoizedProductsList, fetchProducts, addToCart ,fetchSingleProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductsContext, ProductContext };
