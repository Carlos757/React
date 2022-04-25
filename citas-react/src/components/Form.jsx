import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/pacientes/";
const Form = ({
    consultaPacientes,
    paciente,
    setPaciente,
    actualizando,
    setActualizando,
}) => {
    const notifySuccess = (text = "Se creó correctamente") => {
        toast.success(text);
    };
    const notifyError = (text = "Error") => toast.error(text);
    const notifyInfo = (text = "Información") => toast.info(text);
    const notifyWarning = (text = "Advertencia") => toast.warning(text);

    const crearPaciente = async () => {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(paciente),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            if (result.id) {
                notifySuccess();
                setPaciente({
                    petName: "",
                    ownerName: "",
                    email: "",
                    date: "",
                    sintoms: "",
                });
                consultaPacientes();
            } else {
                notifyError(result);
            }
        } catch (error) {
            console.log(error);
            notifyError(error);
        }
    };
    const actualizarPaciente = async (paciente) => {
        try {
            const response = await fetch(url + paciente.id, {
                method: "PUT",
                body: JSON.stringify(paciente),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            if (result.id) {
                notifySuccess("Se actualizó correctamente");
                setPaciente({
                    petName: "",
                    ownerName: "",
                    email: "",
                    date: "",
                    sintoms: "",
                });
                consultaPacientes();
                setActualizando(false);
            } else {
                notifyError(result);
            }
        } catch (error) {
            console.log(error);
            notifyError(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, petName, ownerName, email, date, sintoms } = paciente;
        if (
            petName.trim() === "" ||
            ownerName.trim() === "" ||
            email.trim() === "" ||
            date.trim() === "" ||
            sintoms.trim() === ""
        ) {
            notifyWarning("Los campos no pueden estar vacíos");
            return;
        }
        const newPaciente = {
            id,
            petName,
            ownerName,
            email,
            date,
            sintoms,
        };

        !actualizando
            ? crearPaciente(newPaciente)
            : actualizarPaciente(newPaciente);
    };

    const handlePetNameChange = (e) => {
        setPaciente({ ...paciente, petName: e.target.value });
    };
    const handleOwnerNameChange = (e) => {
        setPaciente({ ...paciente, ownerName: e.target.value });
    };
    const handleEmailChange = (e) => {
        setPaciente({ ...paciente, email: e.target.value });
    };
    const handleDateChange = (e) => {
        setPaciente({ ...paciente, date: e.target.value });
    };
    const handleSintomsChange = (e) => {
        setPaciente({ ...paciente, sintoms: e.target.value });
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setPaciente({
            petName: "",
            ownerName: "",
            email: "",
            date: "",
            sintoms: "",
        });
        setActualizando(false);
    };

    return (
        <div className="mt-3 mx-2 p-5 shadow-xl sm:h-[80vh] sm:overflow-auto shadow-indigo-500/50 rounded-2xl bg-slate-800 text-white sm:w-1/2">
            <h3 className="text-center text-2xl mb-1">Crear Cita</h3>
            <h4 className="text-center font-light text-xl mb-3">
                Agrega Pacientes y{" "}
                <span className="text-blue-500 font-bold">Administralos</span>
            </h4>
            <form
                className="p-5 bg-slate-50 rounded-xl text-black "
                onSubmit={(e) => handleSubmit(e)}
            >
                <label htmlFor="petName" className="mr-1 flex justify-between">
                    <span className="uppercase font-semibold">
                        Nombre Mascota:
                    </span>
                    <span className="fa-solid fa-dog m-1"></span>
                </label>
                <input
                    id="petName"
                    name="petName"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full "
                    type="text"
                    value={paciente.petName}
                    onChange={(e) => handlePetNameChange(e)}
                    placeholder="Ingresa Nombre de la mascota"
                />
                <label
                    htmlFor="ownerName"
                    className="mr-1 flex justify-between"
                >
                    <span className="uppercase font-semibold">
                        Nombre del Propietario:
                    </span>
                    <span className="fa-regular fa-user m-1"></span>
                </label>
                <input
                    id="ownerName"
                    name="ownerName"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="text"
                    value={paciente.ownerName}
                    onChange={(e) => handleOwnerNameChange(e)}
                    placeholder="Ingresa Nombre del Propietario"
                />
                <label htmlFor="email" className="mr-1 flex justify-between">
                    <span className="uppercase font-semibold">Email:</span>
                    <span className="fa-regular fa-envelope m-1"></span>
                </label>
                <input
                    id="email"
                    name="email"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="email"
                    value={paciente.email}
                    onChange={(e) => handleEmailChange(e)}
                    placeholder="Ingresa email del cliente"
                />
                <label htmlFor="date" className="mr-1 flex justify-between">
                    <span className="uppercase font-semibold">Alta:</span>
                    <span className="fa-regular fa-calendar m-1"></span>
                </label>
                <input
                    id="date"
                    name="date"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="date"
                    value={paciente.date}
                    onChange={(e) => handleDateChange(e)}
                    placeholder="Ingresa fecha"
                />
                <label htmlFor="sintoms" className="mr-1 flex justify-between">
                    <span className="uppercase font-semibold">Síntomas:</span>
                    <span className="fa-solid fa-notes-medical m-1"></span>
                </label>
                <textarea
                    id="sintoms"
                    name="sintoms"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="text"
                    value={paciente.sintoms}
                    onChange={(e) => handleSintomsChange(e)}
                    placeholder="Ingresa sintomas de la mascota"
                />
                <div className="my-3">
                    <button
                        type="submit"
                        className="py-3 mb-2 w-full bg-sky-600 text-white rounded-xl font-light text-xl hover:bg-blue-500 hover:transition-all duration-300"
                    >
                        {actualizando ? "Actualizar" : "Crear Cita"}
                    </button>
                    <button
                        className={
                            actualizando
                                ? "py-3 w-full bg-rose-500 text-white rounded-xl font-light text-xl hover:bg-red-500 hover:transition-all duration-300"
                                : "hidden py-3 w-full bg-rose-500 text-white rounded-xl font-light text-xl hover:bg-red-500 hover:transition-all duration-300"
                        }
                        onClick={(e) => handleCancel(e)}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
