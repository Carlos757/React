import { useState, useEffect } from "react";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/";

const ModalNuevoGasto = ({
    setModalNuevoGasto,
    categorias,
    gastos,
    setGastos,
    disponible,
}) => {
    const [nombreGasto, setNombreGasto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState(0);
    const [error, seterror] = useState(false);

    const handleClickOutside = () => {
        setModalNuevoGasto(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validaFormulario()) {
            setGastos([
                ...gastos,
                {
                    id: generateId(),
                    nombre: nombreGasto,
                    cantidad: parseFloat(parseFloat(cantidad).toFixed(2)),
                    categoria: categoria,
                    fecha: new Date().toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    }),
                },
            ]);
            setModalNuevoGasto(false);
        }
    };
    function validaFormulario() {
        const cantidadParseada = parseFloat(parseFloat(cantidad).toFixed(2));

        if (!cantidadParseada || cantidadParseada < 0) {
            seterror(true);
            return false;
        }
        if (nombreGasto === "" || cantidad === "" || categoria === 0) {
            seterror(true);
            return false;
        }
        if (cantidadParseada > disponible) {
            seterror(true);
            return false;
        }
        seterror(false);
        return true;
    }
    function generateId() {
        const date = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        return random + date;
    }
    return (
        <div className="d-flex justify-center align-center">
            <div className="modal-backdrop" onClick={handleClickOutside}></div>
            <div className="modal">
                <form
                    className="card-modal form-modal"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <p className="card-title">Agrega tu gasto</p>
                    <hr />
                    <div className="form-modal-content">
                        <label className="etiqueta" htmlFor="nombre-gasto">
                            Nombre de Gasto
                        </label>
                        <input
                            required
                            type="text"
                            name="nombre-gasto"
                            id="nombre-gasto"
                            value={nombreGasto}
                            onChange={(e) => setNombreGasto(e.target.value)}
                            placeholder="Ingrese nombre"
                        />
                        <label className="etiqueta" htmlFor="cantidad">
                            Cantidad
                        </label>
                        <input
                            required
                            type="number"
                            name="cantidad"
                            id="cantidad"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                            placeholder="Ingrese cantidad"
                        />
                        <label className="etiqueta" htmlFor="categoria">
                            Categoría
                        </label>
                        <select
                            required
                            value={categoria}
                            name="categoria"
                            id="categoria"
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option hidden>Selecciona una Categoría</option>
                            {categorias.length > 0 &&
                                categorias.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.nombre}
                                    </option>
                                ))}
                        </select>

                        <button
                            type="submit"
                            className="btn btn-primary btn-agregar"
                        >
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalNuevoGasto;
