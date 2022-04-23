import { useState, useEffect } from "react";

let Name = () => {
    const [name, setName] = useState("Carlos");
    const [age, setAge] = useState(25);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }
    useEffect(() => {console.log("Name Effect")}, [name]);


    //componentDidEffect
    useEffect(() => {
        console.log("didUpdateEffect");
    });
    //componentDidMount
    useEffect(() => {
        console.log("didMountEffect");

        //componentWillUnmount
        return() => { console.log("componentWillUnmount"); }
    }, [])

    return (
        <div>   
            <h1>Hola {name}</h1>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={age} onChange={handleAgeChange} />
        </div>
    )
}

export default Name;