import React, { useState } from "react";
import Presupuesto from "./Presupuesto";
import Alerta from "./utilities/Alerta";

const NuevoPresupuesto = () => {
    const [presupuesto, setPresupuesto] = useState("");
    const [error, setError] = useState(false);
    const [muestraPresupuesto, setMuestraPresupuesto] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error) {
            setMuestraPresupuesto(true);
            return;
        }
    };
    const handlePresupuesto = (NuevoPresupuesto) => {
        setPresupuesto(NuevoPresupuesto);
        validaPresupuesto(NuevoPresupuesto);
    };
    function validaPresupuesto(NuevoPresupuesto) {
        const presupuestoParseado = parseInt(NuevoPresupuesto);

        if (!presupuestoParseado || presupuestoParseado < 0) {
            setError(true);
            return;
        }
        setError(false);
    }
    return (
        <div className="contenedor contenedor-presupuesto sombra">
            {muestraPresupuesto ? (
                <Presupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setMuestraPresupuesto={setMuestraPresupuesto}
                />
            ) : (
                <form className="formulario" onSubmit={handleSubmit}>
                    {error && (
                        <Alerta text="El presupuesto ingresado no es valido" />
                    )}
                    <div className="campo">
                        <label htmlFor="presupuesto">Definir presupuesto</label>
                        <input
                            className="nuevo-presupuesto"
                            type="number"
                            placeholder="Agrega tu Presupuesto"
                            value={presupuesto}
                            required
                            onChange={(e) => handlePresupuesto(e.target.value)}
                        />
                    </div>

                    <button type="submit">Agregar</button>
                </form>
            )}
        </div>
    );
};

export default NuevoPresupuesto;
