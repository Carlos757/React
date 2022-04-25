import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    return (
        <div className="">
            <Header />
            <div className="container mx-auto flex flex-nowrap flex-col sm:flex-row  sm:items-start">
                <Form />
                <ListadoPacientes />
            </div>
        </div>
    );
}

export default App;
