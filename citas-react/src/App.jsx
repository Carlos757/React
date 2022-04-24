import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    return (
        <div className="container mx-auto">
            <Header />
            <div className=" flex flex-nowrap flex-col sm:flex-row">
                <Form />
                <ListadoPacientes />
            </div>
        </div>
    );
}

export default App;
