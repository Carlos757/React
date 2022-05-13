import React, { useEffect, useState } from "react";

const Filtrado = ({
    categorias,
    categoria,
    setCategoria,
    filtrarGastos,
    gastos,
    setGastosAuxiliar,
    acumularGastos,
    muestraAcumulado,
    setMuestraAcumulado,
}) => {
    useEffect(() => {
        muestraTodosLosGastos();
    }, [categoria]);

    const handleCategoriaChanged = (e) => {
        setCategoria(e.target.value);
    };

    function muestraTodosLosGastos() {
        if (categoria !== "0") {
            setGastosAuxiliar(filtrarGastos());
        } else {
            setGastosAuxiliar(gastos);
        }
        setMuestraAcumulado(false);
    }
    return (
        <div className="card card-content">
            <label className="etiqueta-nombre" htmlFor="categoriaFiltrada">
                Filtrar
            </label>
            <select
                required
                value={categoria}
                name="categoria"
                id="categoria"
                onChange={handleCategoriaChanged}
            >
                <option key={0} value={0}>
                    Todas
                </option>
                {categorias.length > 0 &&
                    categorias.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.nombre}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Filtrado;
