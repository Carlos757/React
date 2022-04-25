import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/pacientes/";

const ListadoPacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [cargandoId, setCargandoId] = useState(null);

    const notifySuccess = (text = "Se eliminó correctamente") => {
        toast.success(text);
    };
    const notifyError = (text = "Error") => toast.error(text);

    const consultaPacientes = async () => {
        try {
            setCargando(true);
            const response = await fetch(url);
            const result = await response.json();
            setPacientes(result);
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };
    const eliminarPaciente = async (id) => {
        try {
            setCargando(true);
            setCargandoId(id);
            const response = await fetch(url + id, { method: "DELETE" });
            const result = await response.json();

            result !== "Not found" ? notifySuccess() : notifyError(result);
            consultaPacientes();
        } catch (error) {
            console.log(error);
            notifyError(error);
        } finally {
            setCargando(false);
            setCargandoId(null);
        }
    };
    const handleEdit = (id) => {
        actualizarPaciente(id);
    };

    const handleDelete = (id) => {
        eliminarPaciente(id);
    };

    useEffect(() => {
        consultaPacientes();
    }, []);

    return (
        <div className="m-3 mx-2 p-5 shadow-xl shadow-indigo-500/50 rounded-2xl bg-slate-800 text-white sm:w-1/2">
            <h3 className="text-center text-2xl mb-1">Listado de Pacientes</h3>
            <h4 className="text-center font-light text-xl mb-3">
                <span className="text-blue-500 font-bold">Administrar</span>{" "}
            </h4>
            {pacientes.length === 0 && cargando && (
                <p className=" text-3xl text-center flex justify-center items-center h-full">
                    <i className="fa-solid fa-circle-notch fa-spin mr-3"></i>
                    Cargando
                </p>
            )}
            {pacientes.length === 0 && !cargando && (
                <p className=" text-3xl text-center flex justify-center flex-col items-center h-full">
                    <i className="fa-solid fa-circle-info mr-3"></i>
                    No hay pacientes registrados
                </p>
            )}
            <ToastContainer autoClose={2000} />

            {pacientes.map((paciente) => {
                return (
                    <div
                        key={paciente.id}
                        className="p-5 mb-3 bg-slate-50 rounded-xl text-black"
                    >
                        <label className="mr-1 flex">
                            <span className="fa-solid fa-dog m-1 w-5"></span>
                            <span>
                                Nombre de la Mascota:{" "}
                                <span className="text-indigo-600 font-bold">
                                    {paciente.petName}
                                </span>
                            </span>
                        </label>
                        <label className="mr-3 flex">
                            <span className="fa-regular fa-user m-1 w-5"></span>
                            <span>
                                Nombre del Propietario:{" "}
                                <span className=" block lg:inline text-indigo-600 font-bold">
                                    {paciente.ownerName}
                                </span>
                            </span>
                        </label>
                        <label className="mr-1 flex">
                            <span className="fa-regular fa-envelope m-1 w-5"></span>
                            <span>
                                Email:{" "}
                                <span className=" block lg:inline text-indigo-600 font-bold">
                                    {paciente.email}
                                </span>
                            </span>
                        </label>
                        <label className="mr-1 flex">
                            <span className="fa-regular fa-calendar m-1 w-5"></span>
                            <span>
                                Alta:{" "}
                                <span className=" block lg:inline text-indigo-600 font-bold">
                                    {paciente.date}
                                </span>
                            </span>
                        </label>
                        <label className="mr-3 flex">
                            <span className="fa-solid fa-notes-medical m-1 pr-1 w-5"></span>
                            <span>
                                Síntomas:{" "}
                                <span className=" block w-full text-indigo-600 font-bold">
                                    {paciente.sintoms}
                                </span>
                            </span>
                        </label>
                        <div className="my-3 grid grid-cols-2 gap-1">
                            <button
                                className="py-1 w-full bg-sky-600 text-white rounded-xl font-light text-xl hover:bg-blue-500 hover:transition-all duration-300"
                                type="submit"
                            >
                                Editar
                            </button>
                            <button
                                className={
                                    cargando && cargandoId === paciente.id
                                        ? " py-1 bg-stone-500 text-white rounded-xl font-light text-xl border-2 border-stone-400 hover:bg-stone-400 hover:border-2 hover:border-solid hover:border-stone-600 cursor-progress"
                                        : " py-1 w-full bg-rose-500 text-white rounded-xl font-light text-xl hover:bg-red-500 hover:transition-all duration-300"
                                }
                                type="submit"
                                onClick={() => handleDelete(paciente.id)}
                                disabled={cargando}
                            >
                                {cargando && cargandoId === paciente.id ? (
                                    <i className="fa-solid fa-ellipsis fa-fade mr-3"></i>
                                ) : (
                                    "Eliminar"
                                )}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListadoPacientes;
