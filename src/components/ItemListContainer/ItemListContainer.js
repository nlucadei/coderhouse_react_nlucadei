import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.js";
import { products } from "../../mocks/products.js";

const ItemListContainer = () => {
    const [ProductList, setProductList] = useState([])

    const {categoryName} = useParams();

    useEffect(() => {
    
        const getProducts = () => new Promise((resolve, reject) => {
            const filtedProducts = products.filter((products) => products.category === categoryName)
            setTimeout(() => {
                resolve(categoryName ? filtedProducts : products)
        }, 1000)
        })
            
        getProducts()
        .then((products) => setProductList(products))
        .catch(error => console.error(error))

    }, [categoryName]);

    return (
        <div>
            <ItemList ProductList={ProductList} />
        </div>
    )
}

export default ItemListContainer;