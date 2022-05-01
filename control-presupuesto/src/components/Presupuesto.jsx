import React from "react";

const Presupuesto = ({
    presupuesto,
    setPresupuesto,
    setMuestraPresupuesto,
}) => {
    const handleReset = () => {
        setPresupuesto("");
        setMuestraPresupuesto(false);
    };
    return (
        <div className="contenido-presupuesto dos-columnas">
            <div>
                <p className="campo">Presupuesto</p>

                <button className="reset-app" onClick={handleReset}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default Presupuesto;
