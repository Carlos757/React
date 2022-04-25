import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/pacientes/";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [actualizando, setActualizando] = useState(false);
    const [paciente, setPaciente] = useState({
        petName: "",
        ownerName: "",
        email: "",
        date: "",
        sintoms: "",
    });

    useEffect(() => {
        consultaPacientes();
    }, []);

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
            <Header />
            <div className="container mx-auto flex flex-nowrap flex-col sm:flex-row  ">
                <Form
                    consultaPacientes={consultaPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    actualizando={actualizando}
                    setActualizando={setActualizando}
                />
                <ListadoPacientes
                    consultaPacientes={consultaPacientes}
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
