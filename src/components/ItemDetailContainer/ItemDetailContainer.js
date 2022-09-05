import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { products } from "../../mocks/products.js";

const ItemDetailContainer = () => {
    const [Product, setProduct] = useState({})

    const {idProd} = useParams()

    useEffect(() => {
        const getProduct = () => new Promise((resolve, reject) => {
            const unicProduct = products.find((product) => product.id === idProd)
            setTimeout(() => {
                resolve(unicProduct)
        }, 1000)
        })


        getProduct()
        .then((product) => {
            setProduct(product)    
        })
        .catch(error => console.error(error))
    }, [idProd])

    return (
        <div>
            <ItemDetail Product={Product} />
        </div>
    )
}

export default ItemDetailContainer;