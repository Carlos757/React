import React from "react";

const ListaGastos = ({ gastos, setGastos, categorias }) => {
    const mostrarIcono = (categoria) => {
        {
            const res = categorias.find((cat) => cat.id === categoria);
            return `./../img/${res.icono}`;
        }
    };
    return (
        <div>
            <p className="subtitle">Lista de Gastos</p>
            {gastos.map(({ id, nombre, cantidad, categoria, fecha }) => (
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
                                    cat.id === categoria ? cat.nombre : ""
                                )}
                            </p>
                            <p className="etiqueta-nombre">{nombre}</p>
                            <p className="etiqueta-fecha">
                                <span className="bold">Agregado el:</span>{" "}
                                {fecha}
                            </p>
                        </div>
                    </div>
                    <p className="etiqueta-precio bold">$ {cantidad}</p>
                </div>
            ))}
        </div>
    );
};

export default ListaGastos;
