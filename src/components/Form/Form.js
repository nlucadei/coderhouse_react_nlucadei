import React from "react";
import estilos from "./form.module.css";

const Form = ({ handleChangeNombre, handleChangeEmail, handleChangeEmail2, handleChangePhone, nombre, email, email2, phone, handleSubmit }) => {

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input className={estilos.inputForm}
                    type="text" 
                    placeholder="Nombre" 
                    onChange={handleChangeNombre}
                    value={nombre}
                    required
                />
                <input className={estilos.inputForm}
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={handleChangeEmail}
                    required
                />
                <input className={estilos.inputForm}
                    type="email" 
                    placeholder="Repetir Email" 
                    value={email2} 
                    onChange={handleChangeEmail2}
                    required
                />
                <input className={estilos.inputForm}
                    type="text" 
                    placeholder="Teléfono" 
                    value={phone} 
                    onChange={handleChangePhone}
                    required
                />
                <button disabled={ email !== email2 } className={estilos.botonForm}>Finalizar Compra</button>
            </form>
        </div>  
    )
};

export default Form;
