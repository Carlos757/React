import { useEffect, useState } from "react";
import Header from "./components/Header";
import NuevoPresupuesto from "./components/NuevoPresupuesto";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/";

function App() {
    const [presupuesto, setPresupuesto] = useState(
        JSON.parse(localStorage.getItem("presupuesto")) ?? ""
    );
    const [muestraPresupuesto, setMuestraPresupuesto] = useState(false);

    useEffect(() => {
        localStorage.getItem("presupuesto") && setMuestraPresupuesto(true);
    }, []);

    return (
        <div className="App">
            <Header />
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                muestraPresupuesto={muestraPresupuesto}
                setMuestraPresupuesto={setMuestraPresupuesto}
            />
        </div>
    );
}

export default App;
