import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PacienteItem from "./PacienteItem";
import Loading from "./utilities/Loading";
import NoData from "./utilities/NoData";

const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/pacientes/";

const ListadoPacientes = ({
    pacientes,
    setPacientes,
    cargando,
    setCargando,
    actualizarPaciente,
}) => {
    const [cargandoId, setCargandoId] = useState(null);

    const eliminarPaciente = (id) => {
        try {
            setCargando(true);
            setCargandoId(id);
            setPacientes(pacientes.filter((paciente) => paciente.id !== id));

            toast.success("Se eliminó correctamente");
        } catch (error) {
            console.log(error);
            toast.error(error);
        } finally {
            setCargando(false);
            setCargandoId(null);
        }
    };
    const handleEdit = (paciente) => {
        actualizarPaciente(paciente);
    };

    const handleDelete = (id) => {
        const resp = confirm("Estas seguro?");

        resp && eliminarPaciente(id);
    };

    return (
        <div className="m-3 mx-2 p-5 sm:h-[80vh] overflow-y-auto shadow-xl shadow-indigo-500/50 rounded-2xl bg-slate-800 text-white sm:w-1/2">
            <h3 className="text-center text-2xl mb-1">Listado de Pacientes</h3>
            <h4 className="text-center font-light text-xl mb-3">
                Administra tus{" "}
                <span className="text-blue-500 font-bold">
                    Pacientes y Citas
                </span>
            </h4>
            {pacientes.length === 0 && cargando && <Loading />}
            {pacientes.length === 0 && !cargando && <NoData />}
            <ToastContainer autoClose={2000} />

            {pacientes.map((paciente) => {
                return (
                    <PacienteItem
                        key={paciente.id}
                        paciente={paciente}
                        cargando={cargando}
                        cargandoId={cargandoId}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};

export default ListadoPacientes;
