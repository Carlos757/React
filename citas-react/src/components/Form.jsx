const Form = () => {
    return (
        <div className="mt-3 mx-2 p-5  rounded-2xl bg-slate-500 text-white sm:w-1/2">
            <h1 className="text-center font-light text-xl mb-3">Crear Cita</h1>
            <form className="p-5 bg-slate-50 rounded-xl text-black">
                <label htmlFor="petName" className="mr-1 flex justify-between">
                    <span>Nombre Mascota:</span>
                    <span className="fa-solid fa-dog m-1"></span>
                </label>
                <input
                    id="petName"
                    name="petName"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full "
                    type="text"
                    placeholder="Ingresa Nombre de la mascota"
                />
                <label
                    htmlFor="ownerName"
                    className="mr-1 flex justify-between"
                >
                    <span>Nombre del Propietario:</span>
                    <span className="fa-regular fa-user m-1"></span>
                </label>
                <input
                    id="ownerName"
                    name="ownerName"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="text"
                    placeholder="Ingresa Nombre del Propietario"
                />
                <label htmlFor="name" className="mr-1 flex justify-between">
                    Email:
                    <span className="fa-regular fa-envelope m-1"></span>
                </label>
                <input
                    id="email"
                    name="email"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="email"
                    placeholder="Ingresa email del cliente"
                />
                <label htmlFor="date" className="mr-1 flex justify-between">
                    Alta:
                    <span className="fa-regular fa-calendar m-1"></span>
                </label>
                <input
                    id="date"
                    name="date"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="date"
                    placeholder="Ingresa fecha"
                />
                <label htmlFor="sintoms" className="mr-1 flex justify-between">
                    Síntomas:
                    <span className="fa-solid fa-notes-medical m-1"></span>
                </label>
                <textarea
                    id="sintoms"
                    name="sintoms"
                    required
                    className="px-2 py-1 mb-4 mt-1 border-2 border-indigo-300 border-solid rounded-lg caret-blue-500 focus:caret-indigo-500 hover:bg-gray-50 w-full"
                    type="text"
                    placeholder="Ingresa sintomas de la mascota"
                />
            </form>
        </div>
    );
};

export default Form;
