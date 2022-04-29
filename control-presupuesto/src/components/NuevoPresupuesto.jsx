import React from "react";

const NuevoPresupuesto = () => {
    return (
        <div className="contenedor contenedor-presupuesto sombra">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="presupuesto">Definir presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Agrega tu Presupuesto"
                    />
                </div>

                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default NuevoPresupuesto;
