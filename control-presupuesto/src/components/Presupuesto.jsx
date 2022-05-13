import React, { useEffect, useState } from "react";
import ListaGastos from "./ListaGastos";
import ModalNuevoGasto from "./ModalNuevoGasto";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/";

const Presupuesto = ({
    presupuesto,
    setPresupuesto,
    setMuestraPresupuesto,
}) => {
    const [categorias, setCategorias] = useState([]);
    const [gastos, setGastos] = useState(
        JSON.parse(localStorage.getItem("gastos")) ?? []
    );

    const [gastado, setGastado] = useState(
        parseFloat(JSON.parse(localStorage.getItem("gastado")) ?? 0)
    );
    const [disponible, setDisponible] = useState(
        formatNumber(presupuesto - gastado)
    );
    const [porcentajeGastado, setPorcentajeGastado] = useState(0);
    const [modalNuevoGasto, setModalNuevoGasto] = useState(false);

    useEffect(() => {
        cargaCategorias();
    }, []);

    useEffect(() => {
        calcularGastado();
        localStorage.setItem("gastos", JSON.stringify(gastos));
    }, [gastos]);

    useEffect(() => {
        setPorcentajeGastado(((gastado * 100) / presupuesto).toFixed(2));
        setDisponible(presupuesto - gastado);
    }, [gastado]);

    const handleReset = () => {
        if (
            window.confirm(
                "¿Estás seguro de que quieres resetear el presupuesto?"
            )
        ) {
            setPresupuesto("");
            localStorage.removeItem("presupuesto");
            localStorage.removeItem("gastos");
            setMuestraPresupuesto(false);
        }
    };
    const handleNuevoGasto = () => {
        setModalNuevoGasto(true);
    };

    async function cargaCategorias() {
        const response = await fetch(url + "categorias");
        const result = await response.json();
        if (result) {
            setCategorias(result);
        }
    }

    function calcularGastado() {
        if (gastos.length > 0) {
            let sumaGastos = gastos.reduce((suma, gasto) => {
                return suma + gasto.cantidad;
            }, 0);
            setGastado(formatNumber(sumaGastos));
        }
    }
    function formatNumber(n) {
        return parseFloat(parseFloat(n).toFixed(2));
    }
    return (
        <div className="d-flex flex-column">
            <div className="card">
                <div className="card-content">
                    <div className="progress">
                        <progress
                            className="progress-bar"
                            max={presupuesto}
                            value={gastado}
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
                            Disponible: <span>$ {disponible.toFixed(2)}</span>
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
                    <img src="/img/nuevo-gasto.svg" alt="nuevo gasto" />
                </a>
                {modalNuevoGasto && (
                    <ModalNuevoGasto
                        setModalNuevoGasto={setModalNuevoGasto}
                        categorias={categorias}
                        setCategorias={setCategorias}
                        gastos={gastos}
                        setGastos={setGastos}
                        disponible={disponible}
                    />
                )}
            </div>
            {gastos.length > 0 && (
                <>
                    <ListaGastos
                        gastos={gastos}
                        setGastos={setGastos}
                        categorias={categorias}
                    />
                </>
            )}
        </div>
    );
};

export default Presupuesto;
