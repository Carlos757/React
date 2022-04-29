import { useState } from "react";
import Header from "./components/Header";
import NuevoPresupuesto from "./components/NuevoPresupuesto";

function App() {
    return (
        <div className="App">
            <Header />
            <NuevoPresupuesto />
        </div>
    );
}

export default App;
