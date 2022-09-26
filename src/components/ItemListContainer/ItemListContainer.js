import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.js";
import db from "../../FirebaseConfig/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import PulseLoader from "react-spinners/PulseLoader";
import estilos from "./itemlistcontainer.module.css";

const ItemListContainer = () => {
    const [ProductList, setProductList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const {categoryName} = useParams();

    useEffect(() => {
    
        const itemCollection = collection(db, "products")

        if (categoryName) { 
            
            const q = query(itemCollection, where("category", "==", categoryName))
            
            getDocs(q)
            .then((res) => {
                const itemsFiltrados = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductList(itemsFiltrados)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        } else {
            
            getDocs(itemCollection)
            .then((res) => {
                const items = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductList(items)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }
    }, [categoryName]);

    return (
        <>
            <div className={estilos.titulo}>Nuestros Productos</div>
            <div className={estilos.cargando}>
                {
                    isLoading 
                    ? <div className={estilos.cargando}><PulseLoader color="#06260E" size={30}/><h4>cargando...</h4></div>
                    : <ItemList ProductList={ProductList} />
                }
            </div>
        </>
    )
}

export default ItemListContainer;