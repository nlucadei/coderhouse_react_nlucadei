import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../FirebaseConfig/firebaseConfig";

const Form = ({cart,total}) => {
 
    const [nombre, setNombre] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const order = {
            items: cart,
            total: total,
            date: serverTimestamp(),
        }
            
        const orderCollection = collection(db, "orders")
    
        addDoc(orderCollection, order).then((res) => {
            console.log(res.id)
        })
    }


    const handleChangeName = (event) => {
        setNombre(event.target.value)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    name="nombre" 
                    value={nombre} 
                    onChange={handleChangeName}
                />
                <button>Enviar</button>
            </form>
        </div>  
    )
};

export default Form;
