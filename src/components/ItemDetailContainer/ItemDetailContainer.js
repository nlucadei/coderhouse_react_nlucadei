import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { products } from "../../mocks/products.js";

const ItemDetailContainer = () => {
    const [Product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = () => new Promise((resolve, reject) => {
            const unicProduct = products.find((product) => product.id === 1 )
            setTimeout(() => {
                resolve(unicProduct)
        }, 2000)
        })


        getProduct()
        .then((product) => {
            setProduct(product)    
        })
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <ItemDetail Product={Product} />
        </div>
    )
}

export default ItemDetailContainer;