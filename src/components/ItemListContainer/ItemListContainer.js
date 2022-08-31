import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import { products } from "../../mocks/products.js";

const ItemListContainer = () => {
    const [ProductList, setProductList] = useState([])

    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(products), 2000)
    })

    useEffect(() => {
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;