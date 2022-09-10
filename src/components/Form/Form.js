import React, { useState } from "react";

const Form = () => {
 
    const [nombre, setNombre] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
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
