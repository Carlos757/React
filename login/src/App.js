import { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  let data = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email} Password: ${password}`);
    setLogged(true);
  }

  /* componentDidMount */
  useEffect(() => {}, []);
  /* componentDidUpdate */
  useEffect(() => { });
  /* componentWillUnmount */
  useEffect(() => { return () => { /*  */ } });


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar Sesion</h2>

        <label>
          Email
          <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        </label>

        <p></p>

        <label>
          Password
          <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        </label>

        <p></p>
        <button type="submit">Login</button>

        {/* { logged ? <h3>Correcto</h3> : null }  */}
        {logged && <h3>Correcto</h3>}

        {data?.map((item, index) => (
            <div key={index} style={{ backgroundColor: item.value }}>
              {item.color}
            </div>
        ))}

      </form>
    </div>
  );
}

export default App;
