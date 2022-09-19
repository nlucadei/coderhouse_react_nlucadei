import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.js";
import { products } from "../../mocks/products.js";
import estilos from "./itemlistcontainer.module.css";

const ItemListContainer = () => {
    const [ProductList, setProductList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const {categoryName} = useParams();

    useEffect(() => {
    
        const getProducts = () => new Promise((resolve, reject) => {
            const filtedProducts = products.filter((products) => products.category === categoryName)
            setTimeout(() => {
                resolve(categoryName ? filtedProducts : products)
        }, 1000)
        })
            
        getProducts()
            .then((products) => {
                setProductList(products)
                setIsLoading(false)
            })
            .catch(error => console.error(error))
        
        return () => {
            setIsLoading(true)
        }

    }, [categoryName]);

    return (
        <div className={estilos.cargando}>
            {
                isLoading 
                ? <h2>Cargando...</h2> 
                : <ItemList ProductList={ProductList} />
            }
        </div>
    )
}

export default ItemListContainer;