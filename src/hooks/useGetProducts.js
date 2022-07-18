import React, {  useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const response = await axios(API);
        setProducts(response.data);
    };

    useEffect(() => {
    fetchData();
    }, []);

    return products
};

export { useGetProducts };