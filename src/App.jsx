
import { useState } from 'react';
import './App.css'; 
import Card from './Components/Card';

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");
  const [mostrarCard, setMonstrarCard] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    let tieneErrores = false;

   
    if (nombre.trim().length < 3 || correo.length < 6){
      setError("Por favor chequea que la información sea correcta");
      tieneErrores = true;
    }
    if (!tieneErrores) {
      setError("");
      setMonstrarCard(true);
    }
  }
    
    const renderCard = () => {
      if (mostrarCard) {
     return <Card nombre={nombre} correo={correo} />
      }
      return null;
     };
    
  return (
    <div className="App">
      <h1>Suscribite para recibir todas nuestras novedades</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="text"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Suscribirse</button>
      </form>
      {error && <p>{error}</p>} 
      {renderCard()}
    </div>
  );
}

export default App;