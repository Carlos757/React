import { useState } from "react";
import Header from "./components/Header";
import NuevoPresupuesto from "./components/NuevoPresupuesto";
const url = "https://60cdf0b491cc8e00178dc287.mockapi.io/";

function App() {
    const [presupuesto, setPresupuesto] = useState("");
    return (
        <div className="App">
            <Header />
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
        </div>
    );
}

export default App;
