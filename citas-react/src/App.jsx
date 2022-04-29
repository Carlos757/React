import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
    const [pacientes, setPacientes] = useState(
        JSON.parse(localStorage.getItem("pacientes")) ?? []
    );
    const [cargando, setCargando] = useState(false);
    const [actualizando, setActualizando] = useState(false);
    const [paciente, setPaciente] = useState({
        petName: "",
        ownerName: "",
        email: "",
        date: "",
        sintoms: "",
    });

    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
        }, 700);
    }, []);

    useEffect(() => {
        console.log("se ejecuto 2");
        console.log(pacientes);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    const actualizarPaciente = (paciente) => {
        setActualizando(true);
        setPaciente({
            id: paciente.id,
            petName: paciente.petName,
            ownerName: paciente.ownerName,
            email: paciente.email,
            date: paciente.date,
            sintoms: paciente.sintoms,
        });
    };
    return (
        <div>
            <Header>Seguimiento de </Header>
            <div className="container mx-auto flex flex-nowrap flex-col sm:flex-row  ">
                <Form
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    actualizando={actualizando}
                    setActualizando={setActualizando}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    cargando={cargando}
                    setCargando={setCargando}
                    actualizarPaciente={actualizarPaciente}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
