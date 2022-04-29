import React from "react";

const PacienteItem = ({
    paciente,
    cargando,
    cargandoId,
    handleEdit,
    handleDelete,
}) => {
    const { id, petName, ownerName, email, date, sintoms } = paciente;
    return (
        <div
            /* key={paciente.id} */
            className="p-5 mb-3 bg-slate-50 rounded-xl text-black shadow-md shadow-slate-700"
        >
            <p className="mr-1 mb-2 flex">
                <span className="fa-solid fa-dog m-1 w-5"></span>
                <span>
                    Nombre de la Mascota:{" "}
                    <span className="block lg:inline text-blue-800 font-bold">
                        {petName}
                    </span>
                </span>
            </p>
            <p className="mr-1 mb-2 flex">
                <span className="fa-regular fa-user m-1 w-5"></span>
                <span>
                    Nombre del Propietario:{" "}
                    <span className=" block lg:inline text-blue-800 font-bold">
                        {ownerName}
                    </span>
                </span>
            </p>
            <p className="mr-1 mb-2 flex">
                <span className="fa-regular fa-envelope m-1 w-5"></span>
                <span>
                    Email:{" "}
                    <span className=" block lg:inline text-blue-800 font-bold">
                        {email}
                    </span>
                </span>
            </p>
            <p className="mr-1 mb-2 flex">
                <span className="fa-regular fa-calendar m-1 w-5"></span>
                <span>
                    Alta:{" "}
                    <span className=" block lg:inline text-blue-800 font-bold">
                        {date}
                    </span>
                </span>
            </p>
            <p className="mr-1 mb-2 flex">
                <span className="fa-solid fa-notes-medical m-1 pr-1 w-5"></span>
                <span>
                    Síntomas:{" "}
                    <span className=" block w-full text-blue-800 font-bold">
                        {sintoms}
                    </span>
                </span>
            </p>
            <div className="my-3 grid grid-cols-2 gap-1">
                <button
                    className="py-1 w-full bg-sky-600 text-white rounded-xl font-light text-xl hover:bg-blue-500 hover:transition-all duration-300"
                    onClick={() => handleEdit(paciente)}
                >
                    Editar
                </button>
                <button
                    className={
                        cargando && cargandoId === id
                            ? " py-1 bg-stone-500 text-white rounded-xl font-light text-xl border-2 border-stone-400 hover:bg-stone-400 hover:border-2 hover:border-solid hover:border-stone-600 cursor-progress"
                            : " py-1 w-full bg-rose-500 text-white rounded-xl font-light text-xl hover:bg-red-500 hover:transition-all duration-300"
                    }
                    type="submit"
                    onClick={() => handleDelete(id)}
                    disabled={cargando}
                >
                    {cargando && cargandoId === id ? (
                        <i className="fa-solid fa-ellipsis fa-fade mr-3"></i>
                    ) : (
                        "Eliminar"
                    )}
                </button>
            </div>
        </div>
    );
};

export default PacienteItem;
