import React, { useEffect, useState } from "react";
import imgNuevoGasto from "./../img/nuevo-gasto.svg";
import ModalNuevoGasto from "./ModalNuevoGasto";

const Presupuesto = ({
    presupuesto,
    setPresupuesto,
    setMuestraPresupuesto,
}) => {
    const [gastado, setGastado] = useState(
        parseFloat(JSON.parse(localStorage.getItem("gastado")) ?? 0)
    );
    const [disponible, setDisponible] = useState(presupuesto - gastado);
    const [porcentajeGastado, setPorcentajeGastado] = useState(0);
    const [modalNuevoGasto, setModalNuevoGasto] = useState(false);

    useEffect(() => {
        return obtenerPorcentajeGastado();
    }, []);

    const handleReset = () => {
        setPresupuesto("");
        setMuestraPresupuesto(false);
    };
    const handleNuevoGasto = () => {
        setModalNuevoGasto(true);
    };

    function obtenerPorcentajeGastado() {
        setPorcentajeGastado(((gastado * 100) / presupuesto).toFixed(2));
    }
    return (
        <div className="card">
            <div className="card-content">
                <div className="progress">
                    <progress
                        className="progress-bar"
                        max={presupuesto}
                        value={porcentajeGastado}
                    />
                    <span className="etiqueta txt-center">
                        {porcentajeGastado}% gastado
                    </span>
                </div>
                <div className="gastos-content">
                    <p className="etiqueta">
                        Presupuesto: <span>$ {presupuesto}</span>{" "}
                    </p>

                    <p className="etiqueta">
                        Disponible: <span>$ {disponible}</span>
                    </p>

                    <p className="etiqueta">
                        Gastado: <span>$ {gastado}</span>
                    </p>

                    <button className="btn btn-reset" onClick={handleReset}>
                        Reiniciar
                    </button>
                </div>
            </div>
            <a className="btn-nuevo-gasto" onClick={handleNuevoGasto}>
                <img src={imgNuevoGasto} alt="nuevo gasto" />
            </a>
            {modalNuevoGasto && <ModalNuevoGasto />}
        </div>
    );
};

export default Presupuesto;
