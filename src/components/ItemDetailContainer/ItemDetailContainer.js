import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import db from "../../FirebaseConfig/firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const [Product, setProduct] = useState({})

    const {idProd} = useParams()

    useEffect(() => {
        
        const itemCollection = collection(db, "products")
        
        const res = doc(itemCollection, idProd)
        
        getDoc(res)
        .then((res) => {
            setProduct({
                id: res.id,
                ...res.data()
            })
        })
        
        .catch((error) => {
            console.error(error)
        })

    }, [idProd])

    return (
        <div>
            <ItemDetail Product={Product} />
        </div>
    )
}

export default ItemDetailContainer;