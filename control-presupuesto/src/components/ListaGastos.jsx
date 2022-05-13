import React, { useEffect, useState } from "react";
import Filtrado from "./Filtrado";

const ListaGastos = ({ gastos, setGastos, categorias }) => {
    const [gastosAuxiliar, setGastosAuxiliar] = useState([]);
    const [muestraAcumulado, setMuestraAcumulado] = useState(false);
    const [categoria, setCategoria] = useState("0");

    useEffect(() => {
        setMuestraAcumulado(false);
        setGastosAuxiliar(gastos);
    }, [gastos]);

    const mostrarIcono = (categoria) => {
        {
            const res = categorias.find((cat) => cat.id === categoria);
            return `./../img/${res.icono}`;
        }
    };

    const handleVerAcumulado = (e) => {
        !muestraAcumulado
            ? acumularGastos()
            : setGastosAuxiliar(filtrarGastos());
        setMuestraAcumulado(!muestraAcumulado);
    };
    function acumularGastos() {
        let gastosSuma = [];
        categorias.forEach((cat) => {
            /* Se filtran los gastos de una categoria */
            const gastosPorCategoriaFiltered = gastosAuxiliar.filter(
                (gasto) => {
                    return gasto.categoria === cat.id;
                }
            );
            /* Se suman las cantidades de los gastos de esa categoria */
            const res = gastosPorCategoriaFiltered.reduce(
                (suma, gasto) => {
                    return (suma = {
                        ...gasto,
                        cantidad: (suma.cantidad += gasto.cantidad),
                    });
                    /* console.log(suma, gasto); */
                },
                { cantidad: 0 }
            );
            /* Si la categoria cuenta con gastos se agrega al resultado */
            res.cantidad > 0 ? (gastosSuma = [...gastosSuma, res]) : undefined;
        });
        setGastosAuxiliar(gastosSuma);
    }
    function filtrarGastos() {
        if (categoria !== "0") {
            const gastosFiltered = gastos.filter(
                (gasto) => gasto.categoria === categoria
            );
            return gastosFiltered;
        }
        return gastos;
    }

    return (
        <div>
            <Filtrado
                categorias={categorias}
                gastos={gastos}
                gastosAuxiliar={gastosAuxiliar}
                setGastosAuxiliar={setGastosAuxiliar}
                acumularGastos={acumularGastos}
                muestraAcumulado={muestraAcumulado}
                setMuestraAcumulado={setMuestraAcumulado}
                categoria={categoria}
                setCategoria={setCategoria}
                filtrarGastos={filtrarGastos}
            />
            <div className="d-flex justify-between align-center">
                <p className="subtitle">Lista de Gastos</p>
                <button
                    className="btn btn-acumulado"
                    onClick={handleVerAcumulado}
                >
                    {muestraAcumulado ? "Ver Todos" : "Ver Acumulado"}
                </button>
            </div>
            {gastosAuxiliar.length ? (
                gastosAuxiliar.map(
                    ({ id, nombre, cantidad, categoria, fecha }) => (
                        <div key={id} className="card card-item">
                            <div className="card-item-content">
                                <img
                                    src={
                                        categorias.length
                                            ? mostrarIcono(categoria)
                                            : "/img/loading.svg"
                                    }
                                    alt="icono gasto"
                                    className="icono"
                                />
                                <div>
                                    <p className="etiqueta-categoria">
                                        {categorias.map((cat) =>
                                            cat.id === categoria
                                                ? cat.nombre
                                                : ""
                                        )}
                                    </p>
                                    <p className="etiqueta-nombre">
                                        {!muestraAcumulado ? nombre : ``}
                                    </p>
                                    <p className="etiqueta-fecha">
                                        <span className="bold">
                                            Agregado el:
                                        </span>{" "}
                                        {fecha}
                                    </p>
                                </div>
                            </div>
                            <p className="etiqueta-precio bold">
                                $ {cantidad.toFixed(2)}
                            </p>
                        </div>
                    )
                )
            ) : (
                <div className="card">
                    <p className="etiqueta-nombre txt-center">
                        No se encontrarón gastos
                    </p>
                </div>
            )}
        </div>
    );
};

export default ListaGastos;
